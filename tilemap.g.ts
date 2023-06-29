// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000001010000000000000000000000000000020201000000000000000000000000000202020000000000000000000000000002020200000000000101010101000000020202000000000102000000020101000202020000000002000000000000020002020200000000020000000000010200020202000000000201010100000200000202020000000000000002010102000002020200000000000000000000000000020202000000000000000000000000000202020000000000000000000000000002020200000000000000000000000000020202000000000000000000000000000202020000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 . . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . 2 2 2 2 2 . . . 2 2 2 . . 
. . 2 2 . . . 2 2 2 . 2 2 2 . . 
. . 2 . . . . . . 2 . 2 2 2 . . 
. . 2 . . . . . 2 2 . 2 2 2 . . 
. . 2 2 2 2 . . 2 . . 2 2 2 . . 
. . . . . 2 2 2 2 . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
. . . . . . . . . . . 2 2 2 . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "MC":
            case "tile1":return tile1;
            case "myTile":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
