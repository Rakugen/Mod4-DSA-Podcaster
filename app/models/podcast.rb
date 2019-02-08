class Podcast < ApplicationRecord
  has_many :playlists
  has_many :episodes
  has_many :users, through: :playlists

end
