const randomColor = (min, max) => {
  let chosenColors = []
  const maxColors = 5
  const limits = { min: 0, max: 5 }
  const random = Math.floor(Math.random() * (limits.max - limits.min + 1)) + limits.min

  // Reset colour arrays if it reached the maximum color range
  if (chosenColors.length === maxColors) chosenColors = []

  // Avoid repeated colors for the defined number of maxColors
  if (chosenColors.indexOf(random) !== -1) return randomColor(limits.min, limits.max)

  // Just record which color was gotten, duh
  chosenColors.push(random)
  return random
}

hexo.extend.helper.register('random_color', () => randomColor(0, 5))
