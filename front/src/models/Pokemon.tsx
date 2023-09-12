export type Pokemon={
    id:number,
    name:string,
    abilities:AbilityOuter[],
<<<<<<< Updated upstream
    moves:MoveOuter[],
    sprites:Sprites
=======
    moves:MoveOuter[]
>>>>>>> Stashed changes
}

export type AbilityOuter={
    ability:AbilityInner
}

export type AbilityInner={
    name:string
}

export type MoveOuter={
    move:MoveInner
}

export type MoveInner={
    name:string
}
<<<<<<< Updated upstream

export type Sprites={
    other:Other
}

export type Other={
    "official-artwork":OfficialArtwork
}

export type OfficialArtwork={
    front_default:string,
}
=======
>>>>>>> Stashed changes
