let Data = [
        {
          "id": 1,
          "question": "What is the capital of France?",
          "options": [
            "Berlin",
            "London",
            "Paris",
            "Rome"
          ],
          "answer": "Paris"
        },
        {
          "id": 2,
          "question": "Which language is used for web apps?",
          "options": [
            "PHP",
            "Python",
            "Javascript",
            "All"
          ],
          "answer": "All"
        },
        {
          "id": 3,
          "question": "Who is the CEO of Tesla?",
          "options": [
            "Jeff Bezos",
            "Elon Musk",
            "Bill Gates",
            "Tony Stark"
          ],
          "answer": "Elon Musk"
        },
        {
          "id": 4,
          "question": "What does HTML stand for?",
          "options": [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Markup Language"
          ],
          "answer": "Hyper Text Markup Language"
        },
        {
          "id": 5,
          "question": "Which year was React first released?",
          "options": [
            "2010",
            "2012",
            "2013",
            "2015"
          ],
          "answer": "2013"
        }
      ]

export const allAnswer = () =>  Data.map(q => q.options.findIndex(opt => opt == q.answer));
         
export default Data;



