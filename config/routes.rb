Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope :name, defaults: { format: :json } do
    post 'country-matched' => 'name#country_matched'
    post 'client-num' => 'name#client_num'
  end
end
