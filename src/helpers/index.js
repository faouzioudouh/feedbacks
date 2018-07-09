/**
 * @desc Remove or add (Toggle) an item in the given array.
 * @param {Array} array
 * @returns {Function} Accept an item as paramter and returns the the array w/o the item.
 */
export const toggleItemInArray = array => item => {
    const index = array.indexOf(item);

    if (index === -1) {
      return [...array, item];
    }

    return array.filter(one => one !== item);
}

/**
 * @desc Highlight the given keyword in the given text with <mark> element.
 * @param {String} text
 * @returns {Function} Accept a text as paramter and returns the highltighted text.
 */
export const highlightKeyword = text => keyword => {
  if (keyword && typeof keyword === 'string') {
    return text.replace(keyword, `<mark>${keyword}</mark>`);
  }

  return text;
}

/**
 * @desc Very simple mobile devices detector.
 * @param {String} userAgent Browser user agenct
 * @returns {Boolean} True if the userAgent belongs to Mobile device, False otherwise.
 */
export const isMobile = userAgent => {
  return userAgent.includes('Mobile');
}