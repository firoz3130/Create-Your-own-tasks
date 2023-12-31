const zod=require('zod');

const createToDo=zod.object({
    title:zod.string(),
    description:zod.string()
});

const updateToDo=z.object({
    id:z.string()
})

module.exports={
    createToDo:createToDo,
    updateToDo:updateToDo
}