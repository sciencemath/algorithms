const filterOperation = {
	"operation": ">",
	"value": 25 
}

const values = [
	{
		"campaign": "campaign 1",
		"value": 25,
		"type": "donor"
	},
		{
		"campaign": "campaign 1",
		"value": 50,
		"type": "donor"
	},
		{
		"campaign": "campaign 2",
		"value": 75,
		"type": "donor"
	},
		{
		"campaign": "campaign 2",
		"value": 100,
		"type": "donor"
	},
		{
		"campaign": "campaign 4",
		"value": 125,
		"type": "donor"
	},
		{
		"campaign": "campaign 1",
		"value": 150,
		"type": "donor"
	}
]

const filteredAndGroupedItems = (data, filter, groupby) => {
  const { operation, value } = filter
  const results = []
  const grouped = new Map()

  data.filter((item) => {
    if (operation === ">") {
      return item.value > value
    }
  }).forEach((item) => {
    if (!grouped.has(item[groupby])) {
      grouped.set(item[groupby], {name: item[groupby], count: 0, total: 0})
      results.push(grouped.get(item[groupby]))
    }

    const updated = grouped.get(item[groupby])
    updated.count += 1
    updated.total += item.value

  })

  return results
}

console.log(filteredAndGroupedItems(values, filterOperation, "campaign"))