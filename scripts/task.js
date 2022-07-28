//using object constructor to produce global variables to use throughout the script.
class Task{
    constructor(important,title,dueDate,desc,color,emoji,location,status,notify){
        this.important = important;
        this.title = title;
        this.dueDate = dueDate;
        this.description = desc;
        this.color = color;
        this.emoji = emoji;
        this.location = location;
        this.status = status;
        this.notify = notify;

        this.name = "Jimmy";

    }
}