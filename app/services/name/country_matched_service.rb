class Name::CountryMatchedService < BaseService
  def initialize(data)
    @data = data
  end

  def call
    create_person
    RespondService.new payload: country_matched
  rescue StandardError
    RespondService.new payload: nil
  end

  private

  def create_person
    person = Person.find_by name: @data[:name]
    Person.create(name: @data[:name], country_code: country_matched) if person.nil?
  end

  def api_endpoint
    'https://api.nationalize.io/'
  end

  def api_query
    params_url = @data.map { |k, v| "#{k}=#{v}&" }.join('')
    "#{api_endpoint}?#{params_url}"
  end

  def data_from_api
    respond = RestClient.get api_query
    JSON.parse respond.body
  end

  def country_matched
    countries = data_from_api['country']
    countries = countries.sort { |a, b| b['probability'] <=> a['probability'] }
    countries.empty? ? '' : countries.first['country_id']
  end
end
