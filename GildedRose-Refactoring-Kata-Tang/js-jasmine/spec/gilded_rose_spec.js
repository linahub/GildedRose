import {Shop, Item} from '../src/gilded_rose.js';
describe('Gilded Rose', function() {

  it('It should have 2 Quality', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });

  it('It should have 22 Quality', function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
  });

  it('It should have 8 Quality', function() {
    const gildedRose = new Shop([ new Item("Normal Item", 5, 10) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

  it('It should have 0 Quality', function() {
    const gildedRose = new Shop([ new Item("Normal Item", 0, 3) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it('It should have 0 Quality', function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 20) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it('It should have 0 sellIn', function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
  });

  it('It should have 80 Quality', function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it('It should have 0 sellIn', function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
  });

});
