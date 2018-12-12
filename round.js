let maxWeight = 0
let minWeight = 0
let weightSum = 0
let currentWeight = 0
let gcd = 0;
let i = -1

const getMaxWight = (a,b) => Math.max(a,b)
const getMinWight = (a,b) => Math.min(a,b)
const getGcd = (a,b) => {
    if(a%b == 0){
        return b
    }else{
        return getGcd(b,a%b)
    }
}

const arr = [
    {
        key:`server_1`,
        weight: 4
    },
    {
        key:`server_2`,
        weight: 3
    },
    {
        key:`server_3`,
        weight: 2
    },
    {
        key:`server_4`,
        weight: 1
    },
]

minWeight = arr[0].weight;

arr.forEach(item => {
    maxWeight = getMaxWight(maxWeight,item.weight)
    minWeight = getMinWight(minWeight,item.weight)
    weightSum += item.weight
    gcd = getGcd(gcd,item.weight)
})



const getServer = () => {
    while(true){
        i = (i + 1) % arr.length

        if(i== 0) {
            currentWeight = currentWeight - gcd
            if(currentWeight < 0){
                currentWeight = maxWeight
                if(currentWeight == 0){
                    return null
                }
            }
        }

        if(arr[i].weight >= currentWeight){
            return arr[i]
        }
    }
}

for(let index = 0; index < weightSum; index++){
    console.log(getServer())
}