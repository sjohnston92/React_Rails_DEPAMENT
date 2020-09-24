class Api::ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [:update, :destroy]

  
  def index
    render json: @department.items
  end

  def all_item
    render json: Item.all
  end

  def show
  end

  def create
    item = @department.item.new(item_params)
    if (item.save)
      render json: item
    else
      render json: item.errors

    end
  end

 
  def update
    if (@item.update(item_params))
      render json: @item 
    else
      render json: @item.errors
    end
  end

  def destroy
    item = @item.destroy
    render json: item
  end

  private

  def item_params
    params.require(:item).permit(:name,:price)
  end

  def set_department
    @department = Department.find(params[:department_id])
  end

  def set_item
    @item = @department.reviews.find(params[:id])
  end
end
