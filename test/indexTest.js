describe('index.js', function () {
  describe('productSummaryAsAnArray()', function () {
    it('returns a array of summaries each product and what it costs', function () {
      expect(productSummaryAsAnArray()).to.eq(["Windows: 100$", "Doors, 200$", "Roofing: 400$"])
    })
  })
  describe('productSummaryAsAString()', function () {
    it('returns a string summarizing each product and what it costs', function () {
      expect(productSummaryAsAString()).to.eq("Windows: 100$, Doors, 200$, Roofing: 400$")
    })
  })
  describe('expensiveProducts()', function () {
    it('returns a list of product objects that cost more than 150', function () {
      expect(expensiveProducts()).to.eq([
        {
          productName: "Doors",
          cost: 200
        },
        {
          productName: "Roofing",
          cost: 400
        }
      ])
    })
  })
  describe('productEstimate(productName, productAmount)', function () {
    it('returns an estimated cost for a given product and quantity', function () {
      expect(productEstimate("Windows", 10)).to.eq(1000)
    })
  })
  describe('totalProjectEstimate(numberOfWindows, numberOfDoors, numberOfRoofing)', function () {
    it('returns an estimated cost for a project for a specified quantity of windows, doors, and roofing', function () {
      expect(totalProjectEstimate(10,2,5)).to.eq(3400)
    })
  })
})
