class UserSerializer < ActiveModel::Serializer
  has_many :playlists
  has_many :podcasts, through: :playlists
  attributes :id, :name, :username, :password
end
