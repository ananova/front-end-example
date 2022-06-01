const entity = {
  name: 'Megaport',
  address: {
    office: {
      unit: 'Level 3',
      street: '825 Ann Street',
      suburb: 'Fortitude Valley',
      city: 'Brisbane',
      state: 'Queensland',
      postcode: 4006,
    },
  },
  industry: {
    type: 'Internet and telecommunications',
    asxListed: true,
  },
}

const getValue = (path, obj = undefined) => {
  // why is the object optional?
  path.split('.').reduce((n, i) => {
    return n[i]
  }, obj)
}

getValue('address.office.suburb', entity)
getValue('industry.asxListed', entity)
