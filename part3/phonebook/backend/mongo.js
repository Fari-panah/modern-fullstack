const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@cluster0.aemsfld.mongodb.net/peopleApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)
.then(() => {
    console.log("✅ Connected to MongoDB!")
    //mongoose.connection.close()
  })
  .catch(err => {
    console.error("❌ Connection error:", err.message)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({

     "name": "Arto Hellas", 
     "number": "040-123456",
   
})

person.save().then(result => {
  console.log('person saved!!!')
  mongoose.connection.close()
})

Person.find({}).then(result => {
  result.forEach(p => {
    console.log(p);
  })
  mongoose.connection.close()
})

// if (process.argv.length === 5) {
// const name = process.argv[3];
// const number = process.argv[4];
// const person = new Person({name,number})
// person.save().then(() => {
//     console.log(`added ${name} number ${number} to phonebook`);
//     mongoose.connection.close()
//   })
// }

// if (process.argv.length === 3) {
//   Person.find({}).then(result => {
//     console.log('phonebook:')
//     result.forEach(p => {
//       console.log(`${p.name} ${p.number}`)
//     })
//     mongoose.connection.close();
//   })
// }
