import { atom, selector } from "recoil";

export const CountAtom = atom({
    key: 'CountAtom',
    default:0,
})
export const EvenCount = selector({
    key: "evenvalue",
    get: ({ get }) => {
        const even = get(CountAtom);
        if (even % 2 === 0) {
           return even
        } else {
            console.log("oddd value"+even);
            
            return <div> NOne</div>
       }

    
    }
})
export const TodoAtom = atom({
    key: "TodoKey",
    default: [
        {
            "id": 1,
            "title": "Finish React Project",
            "description": "Complete the homepage and deploy to Vercel.",
            "category": "Work"
        },
        {
            "id": 2,
            "title": "Grocery Shopping",
            "description": "Buy milk, bread, eggs, and vegetables.",
            "category": "Personal"
        },
        {
            "id": 3,
            "title": "Workout",
            "description": "Do a 30-minute run and 15 push-ups.",
            "category": "Health"
        },
        {
            "id": 4,
            "title": "Read a Book",
            "description": "Read at least 20 pages of Atomic Habits.",
            "category": "Leisure"
        },
        {
            "id": 5,
            "title": "Call Parents",
            "description": "Catch up with Mom and Dad over the phone.",
            "category": "Family"
        }
    ]
,
})