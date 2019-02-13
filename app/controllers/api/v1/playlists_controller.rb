class Api::V1::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render json: @playlists
  end

  def show
    @playlist = Playlist.find(params[:id])
    render json: @playlist, status: :ok
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.save
    render json: @playlist, status: :created
  end

  def update
    @playlist = Playlist.find(params[:id])
    @playlist.update(playlist_params)
    render json: @playlist, status: :accepted
  end

  private
  def playlist_params
    params.require(:playlist).permit(:name, :user_id, :podcast_id)
  end
end
