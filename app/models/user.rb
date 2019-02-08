class User < ApplicationRecord
  has_many :playlists
  has_many :podcasts, through: :playlists

end
