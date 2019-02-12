class Api::V1::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user, status: :ok
  end

  def create
    @user = User.new(user_params)
    @user.save
    render json: @user, status: :created
  end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user, status: :accepted
  end

  def login
    @users = User.all
    @user = @users.find_by(login_params)

    render json: @user, status: :ok
  end

  private
  def user_params
    params.require(:user).permit(:name, :username, :password)
  end

  def login_params
    params.require(:user).permit(:username, :password)
  end
end
