class EpisodeSerializer < ActiveModel::Serializer
  belongs_to :podcast
  attributes :id, :title, :description, :runtime, :episode_num, :audio_url
end
