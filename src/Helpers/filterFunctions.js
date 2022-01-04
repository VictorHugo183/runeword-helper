//Armor Filters:
export const filterAllArmor = (selectedFilters, runewords) => {
  if (selectedFilters['All Armor'] === true) {
    return runewords.filter(item => {
      return (item.ttypes.includes("Body Armors") || item.ttypes.includes("Helms") || item.ttypes.includes("Shields") || item.ttypes.includes("Paladin Shields"))
    })
  } else {
    return runewords
  }
}

export const filterHelms = (selectedFilters, runewords) => {
  if (selectedFilters['All Armor'] === true) { return runewords }
  if (selectedFilters['Helms'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Helms")
    })
  } else {
    return runewords;
  }
}

export const filterShields = (selectedFilters, runewords) => {
  if (selectedFilters['All Armor'] === true) { return runewords }
  if (selectedFilters['Shields'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Shields") || item.ttypes.includes("Paladin Shields")
    })
  } else {
    return runewords;
  }
}

export const filterBodyArmors = (selectedFilters, runewords) => {
  if (selectedFilters['All Armor'] === true) { return runewords }
  if (selectedFilters['Body Armors'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Body Armors")
    })
  } else {
    return runewords;
  }
}

//Weapon Filters:

export const filterAllWeapons = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true) {
    return runewords.filter(item => {
      return (item.ttypes.includes("Missile Weapons") || item.ttypes.includes("Weapons") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Staves") || item.ttypes.includes("Axes") || item.ttypes.includes("Hammers") || item.ttypes.includes("Scepters") || item.ttypes.includes("Clubs") || item.ttypes.includes("Maces") || item.ttypes.includes("Claws") || item.ttypes.includes("Swords") || item.ttypes.includes("Polearms") || item.ttypes.includes("Wands"))
    })
  } else {
    return runewords
  }
}

export const filterMeleeWeapons = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true) { return runewords }
  if (selectedFilters['Melee Weapons'] === true){
    return runewords.filter(item => {
      return (item.ttypes.includes("Weapons") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Staves") || item.ttypes.includes("Axes") || item.ttypes.includes("Hammers") || item.ttypes.includes("Scepters") || item.ttypes.includes("Clubs") || item.ttypes.includes("Maces") || item.ttypes.includes("Claws") || item.ttypes.includes("Swords") || item.ttypes.includes("Polearms") || item.ttypes.includes("Wands"))
    })
  } else {
    return runewords
  }
}

export const filterMissileWeapons = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true) { return runewords }
  if (selectedFilters['Missile Weapons'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Missile Weapons") || item.ttypes.includes("Weapons")
    })
  } else {
    return runewords;
  }
}

//For specific weapon filters we'll show ALL runewords that can be made on that particular weapon type.
//for example: Claws can only have up to 3 sockets, so we'll show all runewords possible on 2-3 socket Claws, Weapons and Melee Weapons

export const filterAxes = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Axes'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Axes") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")
    })
  } else {
    return runewords;
  }
}

export const filterClaws = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Claws'] === true) {
    return runewords.filter(item => {
      return (item.ttypes.includes("Claws") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")) && (item.runes.length <= 3)
    })
  } else {
    return runewords;
  }
}

export const filterClubs = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Clubs'] === true) {
    return runewords.filter(item => {
      return (item.ttypes.includes("Clubs") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")) && (item.runes.length <= 3)
    })
  } else {
    return runewords;
  }
}

export const filterHammers = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Hammers'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Hammers") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")
    })
  } else {
    return runewords;
  }
}
export const filterMaces = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Maces'] === true) {
    return runewords.filter(item => {
      return (item.ttypes.includes("Maces") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")) && (item.runes.length <= 5)
    })
  } else {
    return runewords;
  }
}

export const filterPolearms = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Polearms'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Polearms") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")
    })
  } else {
    return runewords;
  }
}

export const filterScepters = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Scepters'] === true) {
    return runewords.filter(item => {
      return (item.ttypes.includes("Scepters") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")) && (item.runes.length <= 5)
    })
  } else {
    return runewords;
  }
}

export const filterStaves = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Staves'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Staves") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")
    })
  } else {
    return runewords;
  }
}

export const filterSwords = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Swords'] === true) {
    return runewords.filter(item => {
      return item.ttypes.includes("Swords") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")
    })
  } else {
    return runewords;
  }
}

export const filterWands = (selectedFilters, runewords) => {
  if (selectedFilters['All Weapons'] === true || selectedFilters['Melee Weapons'] === true) { return runewords }
  if (selectedFilters['Wands'] === true) {
    return runewords.filter(item => {
      return (item.ttypes.includes("Wands") || item.ttypes.includes("Melee Weapons") || item.ttypes.includes("Weapons")) && (item.runes.length <= 2)
    })
  } else {
    return runewords;
  }
}