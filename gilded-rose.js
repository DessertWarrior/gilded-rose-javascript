export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
export class Legendary extends Item {
  
  constructor(sellIn, quality) {
    super("Sulfuras, Hand of Ragnaros",sellIn,quality);
  }
  updateQuality()
  {
    //Do Nothing
  }
}
export class Agedbrie extends Item{
  constructor(sellIn, quality) {
    super("Aged Brie",sellIn,quality);
  }
  updateQuality()
  {
    this.sellIn--;  //reduce sellIn By one
    if (this.quality >= 50) //DO NOTHING if quality is less or equal 50
      return;

    //if sellIn is less than 0
    if (this.sellIn < 0) 
      this.quality += 2;
    else 
      this.quality +=1

    if (this.quality > 50) {
      this.quality = 50;
    } //set quality to 50 if quality > 50
  }
}
export class Basic extends Item {
  
  constructor(name,sellIn, quality) {
    super(name,sellIn,quality);
  }
  updateQuality()
  {
    this.sellIn--;  //reduce sellIn By one
    if (this.sellIn < 0) 
      this.quality-= 2;
    else 
      this.quality-= 1;   

    if (this.quality < 0)  
      this.quality =0;
  }
}
export class Conjured extends Basic {
  
  constructor(sellIn, quality) {
    super("Conjured",sellIn,quality);
  }
  updateQuality()
  {
    super.updateQuality();
    
    if (this.sellIn < 0) {
          this.quality -= 2;
    }
    else 
      this.quality--;   

    if (this.quality < 0)  
      this.quality =0;
  }
}  
export class Concert extends Item{
  constructor(sellIn, quality) {
    super("Backstage passes to a TAFKAL80ETC concert",sellIn,quality);
  }
  updateQuality()
  {
    this.sellIn--;
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    } //if concert ended
    
    if (this.sellIn < 6) 
      this.quality += 3;
    else if (this.sellIn < 11) 
      this.quality += 2;
    else
      this.quality--;  

    if (this.quality <0)  //set quality to zero if negative
      return this.quality = 0;
  }
}




export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if (
      item.name != "Aged Brie" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert"
    ) {
      if (item.quality > 0) {
        if (item.name != "Sulfuras, Hand of Ragnaros") {
          item.quality = item.quality - 1;
        }
      }
     } 
    else {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
        if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
          if (item.sellIn < 11) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
          if (item.sellIn < 6) {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    }
    if (item.name != "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
      if (item.name != "Aged Brie") {
        if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
          if (item.quality > 0) {
            if (item.name != "Sulfuras, Hand of Ragnaros") {
                item.quality = item.quality - 1;
                if (item.name == "Conjured")
                item.quality = item.quality - 1;
            }
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
  }
};
