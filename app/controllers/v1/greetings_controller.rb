class V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    render json: { data: @greetings.sample.message, status: 200 }
  end
end
