(function () {
  'use strict';
  // const assert = require('assert');

  describe('Color conversion', function () {
    describe('from cmyk to rgb', function () {
      it('should convert key', function () {
        assert.equal(cmykToRgb(...[0, 0, 0, 255]), [35, 31, 1])
      });
      it('should convert magenta', function () {
        assert.equal(cmykToRgb(...[0, 255, 0, 0]), [235, 0, 140])
      });
      it('should convert yellow', function () {
        assert.equal(cmykToRgb(...[0, 0, 255, 0]), [255, 242, 0])
      });
      it('should convert cyan', function () {
        assert.equal(cmykToRgb(...[255, 0, 0, 0]), [0, 174, 239])
      });
      it('should convert red', function () {
        assert.equal(cmykToRgb(...[0, 255, 255, 0]), [237, 28, 36])
      });
    });
  });
})();
