class NameController < ApplicationController
  def country_matched
    name = params[:name]
    respond_service = Name::CountryMatchedService.call({ name: name })

    render json: respond_service.payload, status: :ok if respond_service.success?
    render json: 'Not found', status: :bad_request if respond_service.fail?
  end

  def client_num
    country_code = params[:country_code]
    count_country = Person.count_people_at_country country_code

    render json: count_country, status: :ok
  end
end
