class Api::V1::PodcastsController < ApplicationController
  def index
    @podcasts = Podcast.all
    render json: @podcasts
  end

  def show
    @podcast = Podcast.find(params[:id])
    render json: @podcast, status: :ok
  end
end
