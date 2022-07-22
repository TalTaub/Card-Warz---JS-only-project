class card{
    constructor(symble) {
        this.symble=symble;
        this.image=cardImagesUrl[symble];
        this.power=cardPower[symble];
    }
}






/* i could have chosen to change "symble" into numbers from 2-15 instead and remove the "power" atribute, 
    however i felt it might be better for future use.
*/