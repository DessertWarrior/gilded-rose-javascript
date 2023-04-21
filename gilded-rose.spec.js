import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";
import { Agedbrie, Basic, Concert, Legendary, Conjured} from "./gilded-rose.js";


describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
  it("set sellIn to zero and updateQuanlity() once", () => {
    const testItem = new Item("basic", 0, 11);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(9);
    expect(testItem.sellIn).toBe(-1);
  });
  it("set quality to zero and updateQuanlity() once", () => {
    const testItem = new Item("basic", 5, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(4);
  });
  it("set name to Aged Brie and updateQuality() once", () => {
    const testItem = new Item("Aged Brie", 5, 11);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(12);
    expect(testItem.sellIn).toBe(4);
  });
  it("set name to Aged Brie quality to be 50 and updateQuality() once", () => {
    const testItem = new Item("Aged Brie", 5, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(4);
  });
  it("legendary item 'Sulfuras, Hand of Ragnaros' quality and sellIn remain unchanged", () => {
    const testItem = new Item("Sulfuras, Hand of Ragnaros", 5, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(5);
  });
  it("'Backstage passes to a TAFKAL80ETC concert' increase quality by 2 when sellIn <= 10", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(12);
    expect(testItem.sellIn).toBe(9);
  });
  it("'Backstage passes to a TAFKAL80ETC concert' increase quality by 3 when sellIn <= 5", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 4);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(7);
    expect(testItem.sellIn).toBe(4);
  });
  it("'Backstage passes to a TAFKAL80ETC concert' drop zero when sellIn < 0", () => {
    const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });
});

//
describe("updateQualityClass", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);

    testItem.updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
  it("set sellIn to zero and updateQuanlity() once", () => {
    const testItem = new Basic("basic", 0, 11);

    testItem.updateQuality();
    expect(testItem.quality).toBe(9);
    expect(testItem.sellIn).toBe(-1);
  });
  it("set quality to zero and updateQuanlity() once", () => {
    const testItem = new Basic("basic", 5, 0);

    testItem.updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(4);
  });
  it("set name to Aged Brie and updateQuality() once", () => {
    const testItem = new Agedbrie(5, 11);

    testItem.updateQuality();

    expect(testItem.quality).toBe(12);
    expect(testItem.sellIn).toBe(4);
  });
  it("set name to Aged Brie quality to be 50 and updateQuality() once", () => {
    const testItem = new Agedbrie(5, 50);

    testItem.updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(4);
  });
  it("legendary item 'Sulfuras, Hand of Ragnaros' quality and sellIn remain unchanged", () => {
    const testItem = new Legendary(5, 50);

    testItem.updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(5);
  });
  it("'Backstage passes to a TAFKAL80ETC concert' increase quality by 2 when sellIn <= 10", () => {
    const testItem = new Concert(10, 10);

    testItem.updateQuality();

    expect(testItem.quality).toBe(12);
    expect(testItem.sellIn).toBe(9);
  });
  it("'Backstage passes to a TAFKAL80ETC concert' increase quality by 3 when sellIn <= 5", () => {
    const testItem = new Concert(5, 4);

    testItem.updateQuality();

    expect(testItem.quality).toBe(7);
    expect(testItem.sellIn).toBe(4);
  });
  it("'Backstage passes to a TAFKAL80ETC concert' drop zero when sellIn < 0", () => {
    const testItem = new Concert(0, 10);

    testItem.updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });
  it("'Conjured' doubles what basic do and sellIn < 0", () => {
    const testItem = new Conjured(0, 10);

    testItem.updateQuality();

    expect(testItem.quality).toBe(6);
    expect(testItem.sellIn).toBe(-1);
  });
  it("'Conjured' doubles what basic do", () => {
    const testItem = new Conjured(5, 10);

    testItem.updateQuality();

    expect(testItem.quality).toBe(8);
    expect(testItem.sellIn).toBe(4);
  });
});