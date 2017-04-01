// here is the raw learners list that you are supposed to 
// process appropriately
var learnersRaw = [
    ['Anthony N.', 'anthony', ['Java:8', 'JavaScript:7', 'PHP:5']],
    ['Briana S.', 'sbriana', ['Java:3', 'JavaScript:8', 'PHP:7']],
    ['Stella K.', 'stellak', ['JavaScript:7', 'PHP:5', 'C++:4']],
    ['Clement W.', 'clem0', ['JavaScript:8', 'Java:7', 'Go:3']],
    ['Branda C.', 'bc', ['JavaScript:7', 'Java:9', 'Python:7', 'C++:4']],
    ['Felix R.', 'felix', ['Java:3', 'PHP:8', 'Go:5']],
];

// your code starts here, onwards

var learners = [{'name':"Anthony N",'username':"anthony", 'skills':{'Java':8,'JavaScript':7,'PHP':5}},
{'name':"Briana S",'username':"sbriana", 'skills':{'Java':3,'JavaScript':8,'PHP':7}},
{'name':"Stella K",'username':"stellak", 'skills':{'JavaScript':7,'C++':4,'PHP':5}},
{'name':"Clement W",'username':"clem0", 'skills':{'Java':7,'JavaScript':8,'Go':3}},
{'name':"Branda C",'username':"bc", 'skills':{'JavaScript':7,'Java':9,'Python':7,'C++':4}},
{'name':"Felix R",'username':"felix", 'skills':{'Java':3,'Go':5,'PHP':8}}];

function Learner(name, username, skills) {
    // your code here
    this.name = name;
    this.username = username;
    this.skills = skills;
    this.bestSkill = function(){
        var skill_value_arr = Object.values(this.skills);
        var skill_key_arr = Object.keys(this.skills);
        var best_skill_value = Math.max(...skill_value_arr);
        var index = skill_value_arr.indexOf(best_skill_value);
        var best_skill = skill_key_arr[index];

        return best_skill;
    }
}


function bestSkills(learners) {
    // your code here
    var best_skills_arr = [];
    learners.forEach(function(obj){
        var obj_inst = new Learner(obj.name, obj.username, obj.skills);
        var obj_skil_arr = [];
        obj_skil_arr.push(obj_inst.name);
        obj_skil_arr.push(obj_inst.bestSkill());
        best_skills_arr.push(obj_skil_arr);
    });

    return best_skills_arr;
}

function highestRated(learners, skillName) {
    // your code here
    var highest_rated = {};
    var username = "";
    var rating = 0;
    learners.forEach(function(obj){
        var obj_inst = new Learner(obj.name, obj.username, obj.skills);
        if (obj_inst.skills[skillName]>rating){
            rating = obj_inst.skills[skillName];
            username = obj_inst.username;
        }
    });
    highest_rated['username'] = username;
    highest_rated['rating']=rating;
    return highest_rated;
}

function search(skillName) {
    // your code here
    var learners_in_skill = [];
    learners.forEach(function(obj){
        var obj_inst = new Learner(obj.name, obj.username, obj.skills);
        if(obj_inst.skills[skillName]!==undefined){
            learners_in_skill.push(obj_inst);
        }
    });
    return learners_in_skill;
}