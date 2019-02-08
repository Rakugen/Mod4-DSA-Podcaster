class PodcastSerializer < ActiveModel::Serializer
  has_many :playlists
  has_many :episodes
  has_many :users, through: :playlists
  attributes :id, :title, :description, :num_episodes, :img_url, :thumbnail, :genres, :publisher, :rss
end
