class ApiController < ApplicationController
    protect_from_forgery except: :createLimitedSpaces
    def getLimitedSpaces
        lat = params[:lat]
        lng = params[:lng]
        render :json => Space.getSpaces( lat, lng) 
    end

    def createLimitedSpaces
        userId = params[:user_id]
        if userId.nil?
            # $B%f!<%6!<EPO?=hM}(B 
            userId = 1
        end
        name = params[:name]
        span = params[:span]
        radius = params[:radius]
        lat = params[:lat]
        lng = params[:lng]
        iconType = params[:icon_type]

        space = Space.new
        space.name = name
        space.span = span
        space.radius = radius
        space.lat = lat
        space.lng = lng
        # $B%"%$%3%s4XO"$N=hM}(B
        success = space.save
        if success
            ret = Hash.new
            ret[:code] = 200
            data = Hash.new
            data[:space_id] = space.id
            data[:user_id] = userId
            ret[:data] = data
        else
            # $BJ]B8<:GT;~(B 
            ret = Hash.new
            ret[:code] = 500
        end
        render :json => ret
    end
end
