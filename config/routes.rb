Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :episodes
      resources :podcasts
      resources :playlists
      resources :users do
        collection do
          post :login
        end
      end
      # resources :login, only: [:index]
      # post '/users/login', to: 'users#login'
    end
  end
end
