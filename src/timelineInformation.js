class TimelineInfo{
    constructor(title,subtitle,paragraph,date) {
        this.id = TimelineInfo.incrementId();
        this.title =title;
        this.subtitle =subtitle;
        this.paragraph =paragraph;
        this.date = date;
    }
    static incrementId() {
        if (!this.latestId) this.latestId = 1
        else this.latestId++
        return this.latestId
      }
}

 const TimelineData = [
    new TimelineInfo("Eastern Mediterranean University","B.S Computer Engineering","First time I started coding was at university","Sep 2013"),
    new TimelineInfo("FRD Turkcell Website","Course Project","Worked on the frontend of the website","Jan 2017 - June 2017"),
    new TimelineInfo("Online Pharmacy","Summer Training","Designed the procject templates","June 2018 - Sept 2018"),
    new TimelineInfo("EMU Cryptocurrency","Course Project","Designed the procject templates","Oct 2018 - Dec 2018"),
    new TimelineInfo("Graduated from University","B.S Computer Engineering","Recieved specialization certification in Programming and Soft Computing","Jan 2019"),
    new TimelineInfo("Excelcare","IT Administrator","Worked as IT administrator for a medical complex in Dammam ","Jun 2019 - Dec 2020"),
    new TimelineInfo("Coded!!!!!","Full-stack Web Development Bootcamp","Join coded bootcamp to be an awesome full-stack web developer","Jan 2021-present"),
]



export default TimelineData;