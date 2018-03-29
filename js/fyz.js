//FFFFFFFFFFFFFFFFFFFFFFFFF
    var cubeVertexPositionBuffer;
    var cubeVertexNormalBuffer;
    var cubeVertexTextureCoordBuffer;
    var cubeVertexIndexBuffer;
//YYYYYYYYYYYYYYYYYYYYYYYYY
    var yVertexPositionBuffer;
    var yVertexNormalBuffer;
    var yVertexTextureCoordBuffer;
    var yVertexIndexBuffer;
//ZZZZZZZZZZZZZZZZZZZZZZZZZ
    var zVertexPositionBuffer;
    var zVertexNormalBuffer;
    var zVertexTextureCoordBuffer;
    var zVertexIndexBuffer;
    function initBuffers() {
        //FFFFFFFFFFFFFFFF
        cubeVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
        var vertices = [
            //Z轴上横
            -0.25, 1.0,  0.25,
             0.5,  1.0,  0.25,
             0.5,  0.5,  0.25,
            -0.25, 0.5,  0.25,

            // -Z轴上横
            -0.25, 1.0, -0.25,
             0.5,  1.0, -0.25,
             0.5,  0.5, -0.25,
            -0.25, 0.5, -0.25,
            // X轴上横
             0.5,  1.0, -0.25,
             0.5,  1.0,  0.25,
             0.5,  0.5, -0.25,
             0.5,  0.5,  0.25,
             // Y轴上横
            -0.25, 1.0, -0.25,
            -0.25,  1.0,  0.25,
             0.5,  1.0, -0.25,
             0.5,  1.0,  0.25,
             // -Y轴上横
            -0.25, 0.5, -0.25,
            -0.25, 0.5,  0.25,
             0.5,  0.5, -0.25,
             0.5,  0.5,  0.25,

            // Z轴上横 20 212223
            -0.25, 0.25,  0.25,
             0.25, 0.25,  0.25,
            -0.25,-0.25,  0.25,
             0.25,-0.25,  0.25,

            // -Z轴上横 24 252627
            -0.25, 0.25, -0.25,
             0.25, 0.25, -0.25,
            -0.25,-0.25, -0.25,
             0.25,-0.25, -0.25,
            // X轴下横 28 293031
             0.25, 0.25,  0.25,
             0.25, 0.25, -0.25,
             0.25,-0.25,  0.25,
             0.25,-0.25, -0.25,
             // Y轴下横 32 333435
            -0.25, 0.25,  0.25,
            -0.25, 0.25, -0.25,
             0.25, 0.25,  0.25,
             0.25, 0.25, -0.25,
             // -Y轴下横 36 373839
            -0.25, -0.25,  0.25,
            -0.25, -0.25, -0.25,
             0.25, -0.25,  0.25,
             0.25, -0.25, -0.25,
             // Z轴竖 40 424344
            -0.75,  1, 0.25,
            -0.75, -1, 0.25,
            -0.25,  1, 0.25,
            -0.25, -1, 0.25,
            // -Z轴竖 44 454647
            -0.75,  1, -0.25,
            -0.75, -1, -0.25,
            -0.25,  1, -0.25,
            -0.25, -1, -0.25,
            // X轴竖 48 495051
            -0.25,  1,  0.25,
            -0.25, -1,  0.25,
            -0.25,  1, -0.25,
            -0.25, -1, -0.25,
            // -X轴竖 52 535455
            -0.75,  1,  0.25,
            -0.75, -1,  0.25,
            -0.75,  1, -0.25,
            -0.75, -1, -0.25,
            // y轴竖 56 575859
            -0.75,  1,  0.25,
            -0.75,  1, -0.25,
            -0.25,  1,  0.25,
            -0.25,  1, -0.25,
             // -y轴竖 60 575859
            -0.75,  -1,  0.25,
            -0.75,  -1, -0.25,
            -0.25,  -1,  0.25,
            -0.25,  -1, -0.25
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        cubeVertexPositionBuffer.itemSize = 3;
        cubeVertexPositionBuffer.numItems = 64;
        //法线向量数组坐标
        cubeVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBuffer);
        var vertexNormals = [
            // Z轴上横
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴上横
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
            // X轴上横
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             // Y轴上横
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             // -Y轴上横
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
            // Z轴下横 20 212223
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴下横 24 252627
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
            // X轴下横 28 293031
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             // Y轴下横 32 333435
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             // Z轴竖 40 424344
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             // Z轴竖 40 424344
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴竖 44 454647
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
            // X轴竖 48 495051
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
            // -X轴竖 52 535455
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            // y轴竖 56 575859
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             // -y轴竖 60 575859
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
        cubeVertexNormalBuffer.itemSize = 3;
        cubeVertexNormalBuffer.numItems = 64;
        //FFFFF纹理对应坐标
        cubeVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
        var textureCoords = [
            //Z轴上横            
            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            0.0, 0.0,
            // -Z轴上横
            0.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            // X轴上横
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            0.0, 0.0,
             // Y轴上横
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
             // -Y轴上横
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            // Z轴上横 20 212223
            0.0, 1.0,
            1.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            // -Z轴上横 24 252627
            0.0, 1.0,
            1.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,
            // X轴下横 28 293031
            0.0, 0.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0,
             // Y轴下横 32 333435
            0.0, 1.0,
            0.0, 0.0,
            1.0, 1.0,
            1.0, 0.0,
             // -Y轴下横 36 373839
            0.0, 1.0,
            0.0, 0.0,
            1.0, 1.0,
            1.0, 0.0,
             // Z轴竖 40 424344
            0.0, 1.0,
            0.0, 0.0,
            0.25, 1.0,
            0.25, 0.0,
            // -Z轴竖 44 454647
            0.75, 1.0,
            0.75, 0.0,
            0.5, 1.0,
            0.5, 0.0,
            // X轴竖 48 495051
            0.25,1.0, 
            0.25,0.0, 
            0.5,1.0, 
            0.5,0.0, 
            // -X轴竖 52 535455
            1.0,1.0, 
            1.0,0.0, 
            0.75,1.0, 
            0.75,0.0,
            // y轴竖 56 575859
            0.0, 1.0,
            0.0, 0.0,
            1.0, 1.0,
            1.0, 0.0,
             // -y轴竖 60 575859
            0.0, 1.0,
            0.0, 0.0,
            1.0, 1.0,
            1.0, 0.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
        cubeVertexTextureCoordBuffer.itemSize = 2;
        cubeVertexTextureCoordBuffer.numItems = 64;
        //FFFFFF三角形绘制顺序
        cubeVertexIndexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
        var cubeVertexIndices = [
             0, 1, 2,      0, 2, 3,    //Z轴上横
            4, 5, 6,      4, 6, 7,    // -Z轴上横
            8, 9, 10,     9, 10, 11,  // X轴上横
            12, 13, 14,   13, 14, 15, // Y轴上横
            16, 17, 18,   17, 18, 19, // -Y轴上横
            20, 21, 22,   21, 22, 23,  // Z轴上横
            24, 25, 26,   25, 26, 27, // -Z轴上横
            28, 29, 30,   29, 30, 31, // X轴下横
            32, 33, 34,   33, 34, 35,// Y轴下横
            36, 37, 38,   37, 38, 39,// -Y轴下横
            40, 41, 42,   41, 42, 43,  // Z轴竖
            44, 45, 46,   45, 46, 47, // -Z轴竖
            48, 49, 50,   49, 50, 51, // X轴竖
            52, 53, 54,   53, 54, 55, // -X轴竖
            56, 57, 58,   57, 58, 59,// y轴竖
            60, 61, 62,   61, 62, 63// -y轴竖
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
        cubeVertexIndexBuffer.itemSize = 1;
        cubeVertexIndexBuffer.numItems = 96;
        //YYYYYY顶点坐标
         yVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, yVertexPositionBuffer);
        var vertices = [
          //Z轴左斜杠
            -1.0,   1,  0.2,
             -0.5,   1,  0.2,
               0 , 0.33,  0.2,
           -0.25 , 0,  0.2,
            // -Z轴左斜杠
             -1.0,   1,  -0.2,
             -0.5,   1,  -0.2,
               0 , 0.33,  -0.2,
           -0.25 , 0,  -0.2,
            // X轴左斜杠
             -0.5,   1,  0.2,
             -0.5,   1,  -0.2,
               0 , 0.33,  0.2,
               0 , 0.33,  -0.2,
            // -X轴左斜杠
             -0.25,   0,  0.2,
             -0.25,   0,  -0.2,
             -1,      1,  0.2,
             -1,      1,  -0.2,
             //y轴左斜杠
             -1,   1,  0.2,
             -1,   1,  -0.2,
             -0.5, 1,  0.2,
             -0.5,      1,  -0.2,


           // Z轴右斜杠
             1.0,   1,  0.2,
             0.5,   1,  0.2,
               0 , 0.33,  0.2,
           0.25 , 0,  0.2,
            // -Z轴右斜杠
             1.0,   1,  -0.2,
             0.5,   1,  -0.2,
               0 , 0.33,  -0.2,
           0.25 , 0,  -0.2,
            // X轴右斜杠
             0.5,   1,  0.2,
             0.5,   1,  -0.2,
               0 , 0.33,  0.2,
               0 , 0.33,  -0.2,
            // -X轴右斜杠
             0.25,   0,  0.2,
             0.25,   0,  -0.2,
             1,      1,  0.2,
             1,      1,  -0.2,
             //y轴右斜杠 36373839
             1,   1,  0.2,
             1,   1,  -0.2,
             0.5, 1,  0.2,
             0.5,      1,  -0.2,
             //Z轴三角形 40 41 42
             0,   0.33,  0.2,
             0.25,   0,  0.2,
             -0.25, 0,  0.2,
             //-Z轴三角形 43 44 45
             0,   0.33,  -0.2,
             0.25,   0,  -0.2,
             -0.25, 0,  -0.2,


            // Z轴竖 46
            -0.25,  0, 0.2,
            -0.25,  -1, 0.2,
             0.25,  0, 0.2,
             0.25, -1, 0.2,
            // -Z轴竖 50 
            -0.25,  0, -0.2,
            -0.25,  -1, -0.2,
             0.25,  0, -0.2,
             0.25, -1, -0.2,
            // X轴竖 54 495051
             0.25,  0,  0.2,
             0.25,  0,  -0.2,
             0.25,  -1, 0.2,
             0.25, -1, -0.2,
            // -X轴竖 58 535455
             -0.25,  0,  0.2,
             -0.25,  0,  -0.2,
             -0.25,  -1, 0.2,
             -0.25, -1, -0.2,
            // y轴竖 62 575859
            -0.25,  -1,  0.2,
             -0.25,  -1,  -0.2,
             0.25,  -1, 0.2,
             0.25, -1, -0.2
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        yVertexPositionBuffer.itemSize = 3;
        yVertexPositionBuffer.numItems = 66;
        //YYYYYYYY光照法向量坐标
        yVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, yVertexNormalBuffer);
        var yvertexNormals = [
            // Z轴左斜杠
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴左斜杠
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
            // X轴左斜杠
             0.6,  0.8,  0.0,
             0.6,  0.8,  0.0,
             0.6,  0.8,  0.0,
             0.6,  0.8,  0.0,
            // -X轴左斜杠
             -0.6,  -0.8,  0.0,
             -0.6,  -0.8,  0.0,
             -0.6,  -0.8,  0.0,
             -0.6,  -0.8,  0.0,
             //y轴左斜杠
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
           // Z轴右斜杠
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴右斜杠
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
            // X轴右斜杠
             -0.6,  0.8,  0.0,
             -0.6,  0.8,  0.0,
             -0.6,  0.8,  0.0,
             -0.6,  0.8,  0.0,
            // -X轴右斜杠
             0.6,  -0.8,  0.0,
             0.6,  -0.8,  0.0,
             0.6,  -0.8,  0.0,
             0.6,  -0.8,  0.0,
             //y轴右斜杠 36373839
             0.0, 1.0,  0.0,
             0.0, 1.0,  0.0,
             0.0, 1.0,  0.0,
             0.0, 1.0,  0.0,
             //Z轴三角形 40 41 42
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             //-Z轴三角形 43 44 45
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
            // Z轴竖 46
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴竖 50 
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
            // X轴竖 54 495051
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
            // -X轴竖 58 535455
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            // y轴竖 62 575859
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
            
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(yvertexNormals), gl.STATIC_DRAW);
        yVertexNormalBuffer.itemSize = 3;
        yVertexNormalBuffer.numItems = 66;
        //YYYYYYY纹理坐标
        yVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, yVertexTextureCoordBuffer);
        var ytextureCoords = [
            // Z轴左斜杠
            0.28, 1.0,
            0.35, 1.0,
            0.5, 0.58,
            0.43, 0.5,
            // -Z轴左斜杠
            0.15, 0.84,
            0.06, 0.72,
            0.30, 0.34,
            0.24, 0.30,
            // X轴左斜杠
            0.0, 0.64,
            0.06, 0.72,
            0.18, 0.24,
            0.24, 0.30,
            // -X轴左斜杠
            0.43, 0.5,
            0.30, 0.34,
            0.28, 1.0,
            0.15, 0.84,
             //y轴左斜杠
            0.0, 0.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0,


           // Z轴右斜杠
            0.72, 1.0,
            0.65, 1.0,
            0.5, 0.58,
            0.57, 0.5,
            // -Z轴右斜杠
            0.85, 0.84,
            0.94, 0.72,
            0.76, 0.30,
            0.70, 0.34,
            // X轴右斜杠
            1.0, 0.64,
            0.94, 0.72,
            0.82, 0.24,
            0.76, 0.30,
            // -X轴右斜杠
            0.57, 0.5,
            0.70, 0.34,
            0.72, 1.0,
            0.85, 0.84,
             //y轴右斜杠 36373839
            0.0, 0.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0,
             //Z轴三角形 40 41 42
            0.5, 0.58,
            0.57, 0.5,
            0.43, 0.5,
             //-Z轴三角形 43 44 45
            0.76, 0.30,
            0.75, 0.20,
            0.70, 0.34,
            // Z轴竖 46
            0.43, 0.5,
            0.43, 0.0,
            0.57, 0.5,
            0.57, 0.0,
            // -Z轴竖 50 
            0.95, 0.5,
            0.95, 0.0,
            0.71, 0.5,
            0.71, 0.0,
            // X轴竖 54 495051
            0.57, 0.5,
            0.71, 0.5,
            0.57, 0.0,
            0.71, 0.0,
            // -X轴竖 58 535455
            0.43, 0.5,
            0.29, 0.5,
            0.43, 0.0,
            0.29, 0.0,
            // y轴竖 62 575859
            0.0, 0.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ytextureCoords), gl.STATIC_DRAW);
        yVertexTextureCoordBuffer.itemSize = 2;
        yVertexTextureCoordBuffer.numItems = 66;
        //YYYYYYY三角形绘制顺序
        yVertexIndexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, yVertexIndexBuffer);
        var yVertexIndices = [
             0, 1, 2,      0, 2, 3,    // Z轴左斜杠
            4, 5, 6,      4, 6, 7,    // -Z轴左斜杠
            8, 9, 10,     9, 10, 11,  // X轴左斜杠
            12, 13, 14,   13, 14, 15, //-X轴左斜杠
            16,17,18      ,17,18,19, //  y轴左斜杠
            20, 21, 22,   20, 22, 23,  // Z轴右斜杠
            24, 25, 26,   24, 26, 27, // -Z轴右斜杠
            28, 29, 30,   29, 30, 31, // X轴右斜杠
            32, 33, 34,   33, 34, 35,//-X轴右斜杠
            36, 37, 38,   37, 38, 39,//y轴右斜杠
            40, 41, 42,   43, 44, 45,//  Z轴三角形
            46,47,48,     47,48,49,//-Z轴三角形
            50,51,52,     51,52,53,//Z轴竖
            54,55,56,     55,56,57,//-Z轴竖
            58,59,60,     59,60,61,//X轴竖
            62,63,64,     63,64,65//y轴竖
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(yVertexIndices), gl.STATIC_DRAW);
        yVertexIndexBuffer.itemSize = 1;
        yVertexIndexBuffer.numItems = 96;
          //ZZZZZZZZZ顶点坐标
         zVertexPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, zVertexPositionBuffer);
        var vertices = [
            // X轴1
             1, 1.0,  0.2,
             1,  0.75,  0.2,
             1, 1.0,  -0.2,
             1,  0.75,  -0.2,
            // -X轴1
             -1,     1.0,  0.2,
             -0.75,  0.5,  0.2,
             -1,     1.0,  -0.2,
             -0.75,  0.5,  -0.2,
            // X轴2
             1, 0.75,  0.2,
             1,  0.75,  -0.2,
             -0.25, -0.5,  0.2,
             -0.25, -0.5,  -0.2,
             // -X轴2
            -1, -0.75,  0.2,
             -1,  -0.75,  -0.2,
             0.25, 0.5,  0.2,
             0.25, 0.5,  -0.2,
             // X轴3
             1, -1.0,  0.2,
             0.75,  -0.5,  0.2,
             1, -1.0,  -0.2,
             0.75,  -0.5,  -0.2,
            // -X轴3
             -1, -1.0,  0.2,
             -1, -1.0,  -0.2,
             -1, -0.75,  0.2,
             -1,  -0.75,  -0.2,

            // Z轴上横 24 252627
            -1, 1, 0.2,
             1, 1, 0.2,
            -0.75,0.5, 0.2,
             0.25,0.5, 0.2,
            // -Z轴上横 24 252627
            -1, 1, -0.2,
             1, 1, -0.2,
            -0.75,0.5, -0.2,
             0.25,0.5, -0.2,
             // Z轴斜杠 24 252627
             1, 1, 0.2,
             1, 0.75, 0.2,
            0.25,0.5, 0.2,
             -1,-0.75, 0.2,
            // -Z轴斜杠 24 252627
            1, 1, -0.2,
             1, 0.75, -0.2,
            0.25,0.5, -0.2,
             -1,-0.75, -0.2,
             // Z轴斜杠 24 252627
             1, 0.75, 0.2,
            -1,-0.75, 0.2,
            -0.25, -0.5, 0.2,
             -1,-1, 0.2,
            // -Z轴斜杠 24 252627
            1, 0.75, -0.2,
            -1,-0.75, -0.2,
            -0.25, -0.5, -0.2,
             -1,-1, -0.2,
             // Z轴下横 24 252627
             -0.25, -0.5, 0.2,
             0.75, -0.5, 0.2,
            -1,-1, 0.2,
             1,-1, 0.2,
            // -Z轴下横 24 252627
            -0.25, -0.5, -0.2,
             0.75, -0.5, -0.2,
            -1,-1, -0.2,
             1,-1, -0.2,
             // Y轴上横 24 252627
             -1, 1, 0.2,
            1,1, 0.2,
            -1, 1, -0.2,
             1,1, -0.2,
            // -Y轴上横 24 252627
            -0.75, 0.5, 0.2,
            0.25,0.5, 0.2,
            -0.75, 0.5, -0.2,
             0.25,0.5, -0.2,
              // Y轴下横 24 252627
             -0.25, -0.5, 0.2,
             0.75, -0.5, 0.2,
            -0.25,-0.5, -0.2,
             0.75,-0.5, -0.2,
            // -Y轴下横 24 252627
            -1, -1, 0.2,
             1, -1, 0.2,
            -1,-1, -0.2,
             1,-1, -0.2
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        zVertexPositionBuffer.itemSize = 3;
        zVertexPositionBuffer.numItems = 72;
        //ZZZZZZ法线向量
        zVertexNormalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, zVertexNormalBuffer);
        var vertexNormals = [
            // X轴1
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
            // -X轴1
             -0.44,  -0.88, 0.0,
             -0.44,  -0.88, 0.0,
             -0.44,  -0.88, 0.0,
             -0.44,  -0.88, 0.0,
            // X轴2
             0.7,  -0.7,  0.0,
             0.7,  -0.7,  0.0,
             0.7,  -0.7,  0.0,
             0.7,  -0.7,  0.0,
             // -X轴2
             -0.7,  0.7,  0.0,
             -0.7,  0.7,  0.0,
             -0.7,  0.7,  0.0,
             -0.7,  0.7,  0.0,
             // X轴3
             0.44,  0.88, 0.0,
             0.44,  0.88, 0.0,
             0.44,  0.88, 0.0,
             0.44,  0.88, 0.0,
            // -X轴3
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            // Z轴上横 24 252627
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴上横 24 252627
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             // Z轴斜杠 24 252627
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴斜杠 24 252627
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             // Z轴斜杠 24 252627
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴斜杠 24 252627
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             // Z轴下横 24 252627
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
            // -Z轴下横 24 252627
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             // Y轴上横 24 252627
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
            // -Y轴上横 24 252627
             0.0,  -1.0,  0.0,
             0.0,  -1.0,  0.0,
             0.0,  -1.0,  0.0,
             0.0,  -1.0,  0.0,
              // Y轴下横 24 252627
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
            // -Y轴下横 24 252627
             0.0,  -1.0,  0.0,
             0.0,  -1.0,  0.0,
             0.0,  -1.0,  0.0,
             0.0,  -1.0,  0.0,

        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
        zVertexNormalBuffer.itemSize = 3;
        zVertexNormalBuffer.numItems = 72;
        //ZZZZZZZ纹理对应位置
        zVertexTextureCoordBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, zVertexTextureCoordBuffer);
        var ztextureCoords = [
            // X轴1
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            // -X轴1
            0.0, 0.0,
            1.0, 0.0,
            0.0, 1.0,
            1.0, 1.0,
            // X轴2
            0.0, 0.0,
            0.0, 0.2,
            1.0, 0.0,
            1.0, 0.2,
             // -X轴2
            0.0, 0.0,
            0.0, 0.2,
            1.0, 0.0,
            1.0, 0.2,
             // X轴3
            0.0, 0.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0,
            // -X轴3
            0.0, 0.0,
            0.0, 1.0,
            1.0, 0.0,
            1.0, 1.0,
            // Z轴上横 24 252627
            0.0, 1.0,
            1.0, 1.0,
            0.125, 0.75,
            0.625, 0.75,
            // -Z轴上横 24 252627
            0.0, 1.0,
            1.0, 1.0,
            0.125, 0.75,
            0.625, 0.75,
             // Z轴斜杠 24 252627
            1.0, 1,
            1.0, 0.875,
            0.625, 0.75,
            0.0, 0.125,
            // -Z轴斜杠 24 252627
            1.0, 1,
            1.0, 0.875,
            0.625, 0.75,
            0.0, 0.125,
             // Z轴斜杠 24 252627
            1.0, 0.875,
            0.0, 0.125,
            0.375, 0.25,
            0.0, 0.0,
            // -Z轴斜杠 24 252627
            1.0, 0.875,
            0.0, 0.125,
            0.375, 0.25,
            0.0, 0.0,
             // Z轴下横 24 252627
            0.375, 0.25,
            0.875, 0.25,
            0.0, 0.0,
            1.0, 0.0,
            // -Z轴下横 24 252627
            0.375, 0.25,
            0.875, 0.25,
            0.0, 0.0,
            1.0, 0.0,
             // Y轴上横 24 252627
            0.0, 0.0,
            0.0, 1.0,
            0.25, 0.0,
            0.25,1.0,
            // -Y轴上横 24 252627
            0.0, 0.0,
            1.0, 0.0,
            0.0, 0.5,
            1.0, 0.5,
              // Y轴下横 24 252627
            0.0, 0.0,
            1.0, 0.0,
            0.0, 0.5,
            1.0, 0.5,
            // -Y轴下横 24 252627
            0.0, 0.0,
            1.0, 0.0,
            0.0, 0.25,
            1.0, 0.25,
        ];
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(ztextureCoords), gl.STATIC_DRAW);
        zVertexTextureCoordBuffer.itemSize = 2;
        zVertexTextureCoordBuffer.numItems = 72;
        //ZZZZZZZ三角形绘制顺序
        zVertexIndexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, zVertexIndexBuffer);
        var zVertexIndices = [
             0, 1, 2,      1, 2, 3,    // X轴1
            4, 5, 6,      5, 6, 7,    // -X轴1
            8, 9, 10,     9, 10, 11,  // X轴2
            12, 13, 14,   13, 14, 15, // -X轴2
            16, 17, 18,   17, 18, 19, // X轴3
            20, 21, 22,   21, 22, 23,  // -X轴3
            24, 25, 26,   25, 26, 27, // Z轴上横 
            28, 29, 30,   29, 30, 31, //  -Z轴上横 
            32, 33, 34,   33, 34, 35,// Z轴斜杠 
            36, 37, 38,   37, 38, 39,// -Z轴斜杠 
            40, 41, 42,   41, 42, 43, // Z轴斜杠
            44, 45, 46,   45, 46, 47,  // -Z轴斜杠
            48, 49, 50,   49, 50, 51, // Z轴下横
            52, 53, 54,   53, 54, 55 ,// -Z轴下横
            56, 57, 58,   57, 58, 59,// Y轴上横
            60, 61, 62,   61, 62, 63,// -Y轴上横
            64,65,66,     65,66,67,// Y轴下横
            68,69,70,     69,70,71// -Y轴下横
        ];
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(zVertexIndices), gl.STATIC_DRAW);
        zVertexIndexBuffer.itemSize = 1;
        zVertexIndexBuffer.numItems = 108;
    }

    
    function drawScene() {
      //boolRot=1时角度受观察区滑动条控制
        if (boolRotF==1) {
        fxRot = $( "#sliderRotxF" ).slider( "value" );
        fyRot = $( "#sliderRotyF" ).slider( "value" );
        fzRot = $( "#sliderRotzF" ).slider( "value" );
        };
        if (boolRotY==1) {
        yxRot = $( "#sliderRotxY" ).slider( "value" );
        yyRot = $( "#sliderRotyY" ).slider( "value" );
        yzRot = $( "#sliderRotzY" ).slider( "value" );
        };
        if (boolRotZ==1) {
        zxRot = $( "#sliderRotxZ" ).slider( "value" );
        zyRot = $( "#sliderRotyZ" ).slider( "value" );
        zzRot = $( "#sliderRotzZ" ).slider( "value" );
        };
        //boolRotA=1时角度受观察区滑动条整体栏控制
        if (boolRotA==1) {
        fxRot = $( "#sliderRotx" ).slider( "value" );
        fyRot = $( "#sliderRoty" ).slider( "value" );
        fzRot = $( "#sliderRotz" ).slider( "value" );

        yxRot = $( "#sliderRotx" ).slider( "value" );
        yyRot = $( "#sliderRoty" ).slider( "value" );
        yzRot = $( "#sliderRotz" ).slider( "value" );

        zxRot = $( "#sliderRotx" ).slider( "value" );
        zyRot = $( "#sliderRoty" ).slider( "value" );
        zzRot = $( "#sliderRotz" ).slider( "value" );
        };
        //boolMove=1时 字母的位置受移动区控制
          if (boolMove==1) {
        	FxMove = $( "#sliderMovex" ).slider( "value" )+ $( "#sliderMovexF" ).slider( "value" );
        FyMove = $( "#sliderMovey" ).slider( "value" )+$( "#sliderMoveyF" ).slider( "value" );
        

        YxMove = $( "#sliderMovex" ).slider( "value" )+$( "#sliderMovexY" ).slider( "value" );
        YyMove = $( "#sliderMovey" ).slider( "value" )+$( "#sliderMoveyY" ).slider( "value" );

        ZxMove = $( "#sliderMovex" ).slider( "value" )+$( "#sliderMovexZ" ).slider( "value" );
        ZyMove = $( "#sliderMovey" ).slider( "value" )+$( "#sliderMoveyZ" ).slider( "value" );
         };
         
         //缩放区滑动条  大小由两个滑动条同时控制
        var fZoom = $( "#sliderZoomF" ).slider( "value" )+$( "#sliderZoom" ).slider( "value" );
        var yZoom = $( "#sliderZoomY" ).slider( "value" )+$( "#sliderZoom" ).slider( "value" );
        var zZoom = $( "#sliderZoomZ" ).slider( "value" )+$( "#sliderZoom" ).slider( "value" );
        
        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        pMatrix = okMat4Proj(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0);
//FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
        //F位移缩放区
        mvMatrix = okMat4Trans(FxMove, FyMove, fZoom); 
        //F旋转区
        mvMatrix.rotX(OAK.SPACE_LOCAL, fxRot, true);
        mvMatrix.rotY(OAK.SPACE_LOCAL, fyRot, true);
        mvMatrix.rotZ(OAK.SPACE_LOCAL, fzRot, true);
        //定点属性数据
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexNormalBuffer);
        //把法线向量数组绑定到相应的着色器的属性中
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, cubeVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, cubeVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
        gl.activeTexture(gl.TEXTURE0);
        //FFFFF更改纹理的地方
        //boolTextureF=1时为默认纹理
        if(booltextureF == 1){
        	gl.bindTexture(gl.TEXTURE_2D, starTexture);
        };
        if(booltextureF == 2) {
        	gl.bindTexture(gl.TEXTURE_2D, haizeiTexture);
        };
        if(booltextureF == 3) {
        	gl.bindTexture(gl.TEXTURE_2D, qiaobaTexture);
        };
        gl.uniform1i(shaderProgram.samplerUniform, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);


//YYYYYYYYYYYY
        //Y位移缩放区
        mvMatrix = okMat4Trans(YxMove, YyMove, yZoom); 
        //Y旋转区
        mvMatrix.rotX(OAK.SPACE_LOCAL, yxRot, true);
        mvMatrix.rotY(OAK.SPACE_LOCAL, yyRot, true);
        mvMatrix.rotZ(OAK.SPACE_LOCAL, yzRot, true);

        gl.bindBuffer(gl.ARRAY_BUFFER, yVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, yVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, yVertexNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, yVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, yVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, yVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        //Y更改纹理的地方 1 默认
        if(booltextureY == 1){
        	gl.bindTexture(gl.TEXTURE_2D, starTexture);
        };
        if(booltextureY == 2) {
        	gl.bindTexture(gl.TEXTURE_2D, blackTexture);
        };
        if(booltextureY == 3) {
        	gl.bindTexture(gl.TEXTURE_2D, goldTexture);
        };
        gl.uniform1i(shaderProgram.samplerUniform, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, yVertexIndexBuffer);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, yVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);

        //ZZZZZZZZZZZZ
        //Z旋转缩放区
        mvMatrix = okMat4Trans(ZxMove, ZyMove, zZoom); 
        //Z旋转区
        mvMatrix.rotX(OAK.SPACE_LOCAL, zxRot, true);
        mvMatrix.rotY(OAK.SPACE_LOCAL, zyRot, true);
        mvMatrix.rotZ(OAK.SPACE_LOCAL, zzRot, true);

        gl.bindBuffer(gl.ARRAY_BUFFER, zVertexPositionBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, zVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, zVertexNormalBuffer);
        gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, zVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ARRAY_BUFFER, zVertexTextureCoordBuffer);
        gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, zVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

        gl.activeTexture(gl.TEXTURE0);
        //Z更改纹理的地方 为1时默认
        if(booltextureZ == 1){
        	gl.bindTexture(gl.TEXTURE_2D, starTexture);
        };
        if(booltextureZ == 2) {
        	gl.bindTexture(gl.TEXTURE_2D, coldTexture);
        };
        if(booltextureZ == 3) {
        	gl.bindTexture(gl.TEXTURE_2D, mohuTexture);
        };
        gl.uniform1i(shaderProgram.samplerUniform, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, zVertexIndexBuffer);
        setMatrixUniforms();
        gl.drawElements(gl.TRIANGLES, zVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
        //混合透明区
        var blending = document.getElementById("blending").checked;
        if (blending) {
            //开启混合时的绘制模式
            gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
            gl.enable(gl.BLEND);
            gl.disable(gl.DEPTH_TEST);
            gl.uniform1f(shaderProgram.alphaUniform, parseFloat(document.getElementById("alpha").value));
        } else {
            //如果关闭混合计算方法
            gl.disable(gl.BLEND);
            gl.enable(gl.DEPTH_TEST);
        }
        //光照区
        //是否开启光照
        var lighting = document.getElementById("lighting").checked;
        gl.uniform1i(shaderProgram.useLightingUniform, lighting);
        if (lighting) {
        	//环境光
            //读出用户在滑动条中环境光的红、绿、蓝的颜色值，并传递给着色器。
            gl.uniform3f(
                shaderProgram.ambientColorUniform,
                parseFloat($( "#red2" ).slider( "value" )/255),
                parseFloat($( "#green2" ).slider( "value" )/255),
                parseFloat($( "#blue2" ).slider( "value" )/255)
            );
            //读出用户在滑动条中光线方向向量，并传递给着色器。
            var lightingDirection = new okVec3(
                parseFloat($( "#lightDirectionX" ).slider( "value" )/100),
                parseFloat($( "#lightDirectionY" ).slider( "value" )/100),
                parseFloat($( "#lightDirectionZ" ).slider( "value" )/100)
            );
            
            var adjustedLD = lightingDirection.normalize(false);
            adjustedLD = okVec3MulVal(adjustedLD, -1.0);
            gl.uniform3fv(shaderProgram.lightingDirectionUniform, adjustedLD.toArray());
            var blueLight=$( "#blue" ).slider( "value" )/255;
             // alert($( "#blue" ).slider( "value" ));
             //将平行光的颜色分量传送到相应的着色器uniform变量中
            gl.uniform3f(
                shaderProgram.directionalColorUniform,
                
                parseFloat($( "#red" ).slider( "value" )/255),
                parseFloat($( "#green" ).slider( "value" )/255),
                parseFloat(blueLight)
            );
        }
    }


    var lastTime = 0;
    var h=0,A2=1.57,A3=0,Y2,Y3,Yspeed3=0,boolY3=1,ty3=0,Yspeed2=0,ty2=0;
    function animate() {
        //旋转速度
        var fxSpeed = $( "#sliderSpeedxF" ).slider( "value" );
        var fySpeed = $( "#sliderSpeedyF" ).slider( "value" );
        var fzSpeed = $( "#sliderSpeedzF" ).slider( "value" );

        var yxSpeed = $( "#sliderSpeedxY" ).slider( "value" );
        var yySpeed = $( "#sliderSpeedyY" ).slider( "value" );
        var yzSpeed = $( "#sliderSpeedzY" ).slider( "value" );

        var zxSpeed = $( "#sliderSpeedxZ" ).slider( "value" );
        var zySpeed = $( "#sliderSpeedyZ" ).slider( "value" );
        var zzSpeed = $( "#sliderSpeedzZ" ).slider( "value" );
        //旋转速度为0时受整体栏滑动条控制
        if (boolRotA==0) {
         fxSpeed = $( "#sliderSpeedx" ).slider( "value" );
         fySpeed = $( "#sliderSpeedy" ).slider( "value" );
         fzSpeed = $( "#sliderSpeedz" ).slider( "value" );

         yxSpeed = $( "#sliderSpeedx" ).slider( "value" );
         yySpeed = $( "#sliderSpeedy" ).slider( "value" );
         yzSpeed = $( "#sliderSpeedz" ).slider( "value" );

         zxSpeed = $( "#sliderSpeedx" ).slider( "value" );
         zySpeed = $( "#sliderSpeedy" ).slider( "value" );
         zzSpeed = $( "#sliderSpeedz" ).slider( "value" );
        };
        var fmove=2;
        
        var timeNow = new Date().getTime();
        if (lastTime != 0) {
            var elapsed = timeNow - lastTime;

            fxRot += (fxSpeed * elapsed) / 1000.0;
            fyRot += (fySpeed * elapsed) / 1000.0;
            fzRot += (fzSpeed * elapsed) / 1000.0;

            yxRot += (yxSpeed * elapsed) / 1000.0;
            yyRot += (yySpeed * elapsed) / 1000.0;
            yzRot += (yzSpeed * elapsed) / 1000.0;

            zxRot += (zxSpeed * elapsed) / 1000.0;
            zyRot += (zySpeed * elapsed) / 1000.0;
            zzRot += (zzSpeed * elapsed) / 1000.0;
            //FFF x轴直线运动
            if (boolMoveF==2) {
            	FxMove=(FxMove +0.01);
            };
            //FFF y轴直线运动
            if (boolMoveF==3) {
            	FyMove=(FyMove +0.01);
            };
            //YYY 平抛运动
            if (boolMoveY==2) {
            	ty2=ty2+elapsed/1000;
            	YxMove=YxMove+0.04;
            	Yspeed2=5*ty2;//速度
            	YyMove=Y2-Yspeed2*ty2;
              
            };
            //YYY 自由落体运动
            if (boolMoveY==3) {
            	if (boolY3==1) {
            		ty3=ty3+elapsed/1000//时间
            		 Yspeed3=5*ty3;//速度
            		YyMove=Y3-Yspeed3*ty3;
            		if (YyMove<0&&Yspeed3>0.000001) {
            			ty3=0;
            			boolY3=0;
            			Yspeed3=Yspeed3/1.1;
            		}
            		
            	}
            	if (boolY3==0) {
            		ty3=ty3+elapsed/1000;
            		Yspeed3=Yspeed3-5*ty3;
            		YyMove=YyMove+ty3*Yspeed3;
            		if (Yspeed3<=0.0001&&YyMove>=0.01) {
            			ty3=0;
            			boolY3=1;
            			Y3=YyMove;
            			// Y3l+=2;
            		}
            		if (Yspeed3<=0.0001&&YyMove<0.01) {
            				YyMove=0;
                    Yspeed3=0;
                    t3=0;
            		}
            	}
            };
            //ZZZ 圆周运动
            if (boolMoveZ==2) {
            	h+=0.01;
            	ZyMove=2*Math.sin(h);
            	ZxMove=2*Math.cos(h);
            };
            //ZZZ 空间穿梭
            if (boolMoveZ==3) {
            	h+=0.01;
            	ZyMove=1/Math.sin(h);
            	ZxMove=1/Math.cos(h);
            };
            //整体 椭圆周运动
            if (boolMoveA==2) {
            	A2+=0.01;
            	ZyMove=0.5*Math.sin(A2);
            	ZxMove=2*Math.cos(A2)+2;
            	FyMove=0.5*Math.sin(A2);
            	FxMove=2*Math.cos(A2)-2;
            	YyMove=0.5*Math.sin(A2);
            	YxMove=2*Math.cos(A2);
            };
            //整体 四边形运动
            if (boolMoveA==3) {
            	// A3x+=0.01;
            	 if (A3==0) {		
            	ZxMove=ZxMove+0.01;
            	FxMove=FxMove+0.01;
            	YxMove=YxMove+0.01;
	            	if (YxMove>=1) {
	            		A3=1;
	            	}
            	 }
            	 else if(A3==1){
            	 	ZyMove=ZyMove+0.01;
            	FyMove=FyMove+0.01;
            	YyMove=YyMove+0.01;
            	if (YyMove>=1) {
	            		A3=2;
	            	}
            	 }
            	 else if(A3==2){
            	ZxMove=ZxMove-0.01;
            	FxMove=FxMove-0.01;
            	YxMove=YxMove-0.01;
	            	if (YxMove<=0) {
	            		A3=3;
	            	}
            	 }
            	 else if(A3==3){
            	 	ZyMove=ZyMove-0.01;
            	FyMove=FyMove-0.01;
            	YyMove=YyMove-0.01;
            	if (YyMove<=0) {
	            		A3=0;
	            	}
            	}
            };       
        }
        lastTime = timeNow;
    }
    //画纹理的。不会变动
    function handleLoadedTexture(texture) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
        gl.generateMipmap(gl.TEXTURE_2D);

        gl.bindTexture(gl.TEXTURE_2D, null);
    }


    var haizeiTexture;
    var goldTexture;
    var coldTexture;
    var starTexture;
    var blackTexture;
    var qiaobaTexture;
    var mohuTexture;
    //更改纹理地址的地方
    function initTexture() {

        haizeiTexture = gl.createTexture();
        haizeiTexture.image = new Image();
        haizeiTexture.image.onload = function () {
            handleLoadedTexture(haizeiTexture)
        }

        haizeiTexture.image.src = "images/haizei.jpg";

        qiaobaTexture = gl.createTexture();
        qiaobaTexture.image = new Image();
        qiaobaTexture.image.onload = function () {
            handleLoadedTexture(qiaobaTexture)
        }

        qiaobaTexture.image.src = "images/qiaoba.jpg";

        goldTexture = gl.createTexture();
        goldTexture.image = new Image();
        goldTexture.image.onload = function () {
            handleLoadedTexture(goldTexture)
        }

        goldTexture.image.src = "images/godd.jpg";

        coldTexture = gl.createTexture();
        coldTexture.image = new Image();
        coldTexture.image.onload = function () {
            handleLoadedTexture(coldTexture)
        }

        coldTexture.image.src = "images/wenli2.jpg";

        starTexture = gl.createTexture();
        starTexture.image = new Image();
        starTexture.image.onload = function () {
            handleLoadedTexture(starTexture)
        }

        starTexture.image.src = "images/star2.jpg";
        blackTexture = gl.createTexture();
        blackTexture.image = new Image();
        blackTexture.image.onload = function () {
            handleLoadedTexture(blackTexture)
        }
        blackTexture.image.src = "images/black.jpg";

        mohuTexture = gl.createTexture();
        mohuTexture.image = new Image();
        mohuTexture.image.onload = function () {
            handleLoadedTexture(mohuTexture)
        }
        mohuTexture.image.src = "images/mohu.jpg";
    }


    var mvMatrix ;
    var mvMatrixStack = [];
    var pMatrix ;

    function mvPushMatrix() {
        var copy = new okMat4();
        mvMatrix.clone(copy);
        mvMatrixStack.push(copy);
    }

    function mvPopMatrix() {
        if (mvMatrixStack.length == 0) {
            throw "Invalid popMatrix!";
        }
        mvMatrix = mvMatrixStack.pop();
    }


   function setMatrixUniforms() {
        gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix.toArray());
        gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix.toArray());
        //基于模型视图的矩阵 光照 转换法线向量
        var normalMatrix = mvMatrix.inverse().transpose();
        gl.uniformMatrix4fv(shaderProgram.nMatrixUniform, false, normalMatrix.toArray());
    }

    function tick() {
        okRequestAnimationFrame(tick);
        drawScene();
        animate();
    }
    function webGLStart() {
        var canvas = document.getElementById("fyzcanvas");
        initGL(canvas);
        initShaders();
        initBuffers();
        initTexture();
        //背景颜色
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.enable(gl.DEPTH_TEST);
        tick();
    }