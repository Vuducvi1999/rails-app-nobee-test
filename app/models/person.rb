class Person < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :country_code, presence: true

  scope :count_people_at_country, ->(country_code) { where(country_code: country_code).size }
end
