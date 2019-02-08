class PlaylistSerializer < ActiveModel::Serializer
  belongs_to :user
  belongs_to :podcast
  attributes :id, :name
end
