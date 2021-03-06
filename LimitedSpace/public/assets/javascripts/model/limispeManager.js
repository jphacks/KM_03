// ===========================
// リミスペ管理クラス
// ===========================
function LimitedSpaceManager() {
    // リミスペの配列
    this.LimitedSpaces = [];
    // リミスペを配置できる範囲
    this.points = [];
    
    // 現在使われているpointsの内容
    this.points_hash = [];
    this.points_hash_index  = 0;

}

//  位置
function point(x, y) {
    this.x = x;
    this.y = y;
}

// ===========================
// 
// ===========================

LimitedSpaceManager.prototype.GRID = 85;


LimitedSpaceManager.prototype.init = function () {
    var body = $("#space");
    var bg_height = body.height();
    var bg_width = body.width();

    var grid = LimitedSpaceManager.prototype.GRID;

    for (var rows = grid; rows < bg_height - grid; rows += grid * 2) {
        for (var cols = grid; cols < bg_width - grid; cols += grid * 2) {
            var point_tmp = new point(cols -grid/2+ 10,rows - grid/2);
            this.points.push(point_tmp);
        }
    }
    
     console.log( this.points );
    try {
        
        console.log( window.spaces );
        
        for (var i = 0; i< 2; i++) {
            var limited_space = new LimitedSpace();
            
            var is_go = true;
            var rand = Math.round( Math.random() * this.points.length );
            
            if( this.points_hash.length == 0 )
                    is_go = false;
            
            while ( is_go ) {
                rand = Math.round( Math.random() * this.points.length );
                    
                for ( var i= 0; i < this.points_hash.length; i++){
                    is_go = false;
                    if( rand == this.points_hash[i] ) {
                        is_go = true;
                        break;
                    }  
                }
            }
            console.log( is_go );
            console.log ( rand );
            this.points_hash[ this.points_hash_index++ ] = rand;
            
            limited_space.init(i, 100, 100, 100, 100, this.points[rand].x, this.points[rand].y );
            this.LimitedSpaces.push( limited_space );
            
        }
    } catch (e) {
        console.log(e);
    }

}
