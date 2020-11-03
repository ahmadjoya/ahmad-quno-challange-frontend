import { Doctor } from "../@types/Doctor";

const doctors: Omit<Doctor, "slug" | "qunoScoreText">[] = [
  {
    name: "Dr. Lay Raphael",
    city: "Citampian",
    country: "Indonesia",
    qunoScoreNumber: 8.5,
    ratingsAverage: 4.8,
    treatmentsLastYear: 2490,
    yearsExperience: 15,
    basePrice: 1355.76,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Laurianne McNuff",
        country: "Russia",
        date: "2019-12-06T00:06:42Z",
        headline: "consequat morbi a ipsum",
        content:
          "ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede",
      },
      {
        patientName: "Ingram Wabey",
        country: "Portugal",
        date: "2020-01-27T08:58:17Z",
        headline: "nulla nunc purus phasellus in felis donec",
        content:
          "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
      },
      {
        patientName: "Yancey Niess",
        country: "Colombia",
        date: "2020-07-25T13:35:03Z",
        headline: "vestibulum ac est",
        content:
          "massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula",
      },
    ],
  },
  {
    name: "Dr. Wallie Lagden",
    city: "Roza",
    country: "Russia",
    qunoScoreNumber: 7.1,
    ratingsAverage: 4.5,
    treatmentsLastYear: 2218,
    yearsExperience: 7,
    basePrice: 4934.98,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Oren Pabst",
        country: "France",
        date: "2020-03-29T19:23:48Z",
        headline:
          "magna bibendum imperdiet nullam orci pede venenatis non sodales sed",
        content:
          "amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo",
      },
      {
        patientName: "Maisie Abernethy",
        country: "Poland",
        date: "2019-12-29T20:38:37Z",
        headline: "dapibus dolor vel est donec odio justo",
        content:
          "quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
      },
      {
        patientName: "Letizia Kingsnod",
        country: "Comoros",
        date: "2020-05-08T23:03:43Z",
        headline: "vehicula consequat morbi a ipsum integer a nibh in",
        content:
          "nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
      },
      {
        patientName: "Roy Styant",
        country: "China",
        date: "2020-10-01T14:33:43Z",
        headline:
          "elit proin interdum mauris non ligula pellentesque ultrices phasellus id",
        content: "ipsum integer a nibh in quis justo maecenas rhoncus aliquam",
      },
    ],
  },
  {
    name: "Dr. Monty Guinan",
    city: "Dehui",
    country: "China",
    qunoScoreNumber: 7.2,
    ratingsAverage: 4.0,
    treatmentsLastYear: 1980,
    yearsExperience: 6,
    basePrice: 1244.82,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Erin Jacobbe",
        country: "Mongolia",
        date: "2020-06-24T08:59:50Z",
        headline: "odio cras mi pede malesuada in",
        content:
          "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam",
      },
      {
        patientName: "Arney Leipelt",
        country: "Indonesia",
        date: "2020-02-15T22:37:13Z",
        headline: "arcu adipiscing molestie hendrerit at vulputate vitae nisl",
        content:
          "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis",
      },
      {
        patientName: "Burlie Gudge",
        country: "Indonesia",
        date: "2020-07-03T11:01:24Z",
        headline: "vitae mattis nibh ligula nec sem duis aliquam convallis",
        content:
          "vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id",
      },
    ],
  },
  {
    name: "Dr. Allis Outridge",
    city: "Świnice Warckie",
    country: "Poland",
    qunoScoreNumber: 8.3,
    ratingsAverage: 3.5,
    treatmentsLastYear: 392,
    yearsExperience: 11,
    basePrice: 1387.41,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Emili Insoll",
        country: "Philippines",
        date: "2020-05-15T20:41:58Z",
        headline: "sed augue aliquam erat volutpat in congue",
        content:
          "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at",
      },
      {
        patientName: "Wendy Romanetti",
        country: "South Africa",
        date: "2020-10-14T05:11:29Z",
        headline: "curabitur in libero ut massa volutpat convallis",
        content:
          "mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus",
      },
    ],
  },
  {
    name: "Dr. Cayla Loftie",
    city: "El Paso",
    country: "United States",
    qunoScoreNumber: 9.7,
    ratingsAverage: 4.1,
    treatmentsLastYear: 1270,
    yearsExperience: 5,
    basePrice: 3715.79,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Romola Tohill",
        country: "Czech Republic",
        date: "2020-07-17T23:03:38Z",
        headline: "ut tellus nulla ut",
        content:
          "consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat",
      },
      {
        patientName: "Mireille Sprankling",
        country: "China",
        date: "2020-02-28T18:49:54Z",
        headline: "praesent blandit nam nulla integer pede justo lacinia",
        content:
          "ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
      },
      {
        patientName: "Aurthur Mawne",
        country: "Thailand",
        date: "2020-04-13T14:38:10Z",
        headline: "potenti nullam porttitor lacus at",
        content:
          "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at",
      },
      {
        patientName: "Morie Fincke",
        country: "Tanzania",
        date: "2020-08-06T18:55:10Z",
        headline: "donec odio justo sollicitudin ut",
        content:
          "non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat",
      },
      {
        patientName: "Federico Parcall",
        country: "China",
        date: "2020-01-15T00:56:01Z",
        headline: "maecenas tristique est et tempus semper est quam",
        content:
          "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor",
      },
    ],
  },
  {
    name: "Dr. Zak Beesley",
    city: "San Antonio",
    country: "Mexico",
    qunoScoreNumber: 9.6,
    ratingsAverage: 3.9,
    treatmentsLastYear: 2775,
    yearsExperience: 5,
    basePrice: 1604.71,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Farlie Bessent",
        country: "Bulgaria",
        date: "2019-11-25T16:36:54Z",
        headline: "nam ultrices libero non mattis pulvinar nulla",
        content:
          "lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet",
      },
      {
        patientName: "Augy Lanfear",
        country: "Bhutan",
        date: "2020-01-01T17:29:21Z",
        headline: "dolor vel est donec odio justo",
        content:
          "felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis",
      },
      {
        patientName: "Hayden McKeurtan",
        country: "Netherlands",
        date: "2020-10-28T03:46:08Z",
        headline:
          "vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
        content:
          "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam",
      },
      {
        patientName: "Dominik Spindler",
        country: "Nepal",
        date: "2020-04-09T02:01:27Z",
        headline: "elementum eu interdum eu tincidunt in leo maecenas",
        content:
          "pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna",
      },
      {
        patientName: "Gerri Barlthrop",
        country: "Croatia",
        date: "2019-12-05T12:26:46Z",
        headline: "integer pede justo lacinia",
        content:
          "sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci",
      },
    ],
  },
  {
    name: "Dr. Linus Rogier",
    city: "Xilanqi",
    country: "China",
    qunoScoreNumber: 8.7,
    ratingsAverage: 5.0,
    treatmentsLastYear: 1446,
    yearsExperience: 5,
    basePrice: 4185.5,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Sue Looks",
        country: "Japan",
        date: "2020-02-17T09:52:45Z",
        headline:
          "eu est congue elementum in hac habitasse platea dictumst morbi",
        content:
          "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
      },
      {
        patientName: "Stormi Lait",
        country: "China",
        date: "2020-08-31T06:31:22Z",
        headline: "suscipit ligula in lacus curabitur",
        content:
          "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse",
      },
      {
        patientName: "Iain Menego",
        country: "Sweden",
        date: "2020-02-13T04:16:58Z",
        headline: "aenean lectus pellentesque",
        content:
          "condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus",
      },
      {
        patientName: "Onfroi Murrock",
        country: "France",
        date: "2020-02-16T05:12:16Z",
        headline: "lacinia nisi venenatis tristique fusce",
        content:
          "nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula",
      },
      {
        patientName: "Rory Henmarsh",
        country: "France",
        date: "2020-03-13T21:11:01Z",
        headline: "quis tortor id nulla",
        content:
          "aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
      },
    ],
  },
  {
    name: "Dr. Annora Chiddy",
    city: "Jishigang",
    country: "China",
    qunoScoreNumber: 8.2,
    ratingsAverage: 4.8,
    treatmentsLastYear: 497,
    yearsExperience: 15,
    basePrice: 3732.29,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Milicent Patifield",
        country: "Russia",
        date: "2020-06-15T04:01:22Z",
        headline: "convallis morbi odio odio",
        content:
          "sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti",
      },
      {
        patientName: "Christiano Vedenyapin",
        country: "Macedonia",
        date: "2020-06-12T01:36:53Z",
        headline: "interdum venenatis turpis enim blandit mi in",
        content:
          "luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",
      },
      {
        patientName: "Shane Northcote",
        country: "Russia",
        date: "2020-02-22T18:12:14Z",
        headline: "amet turpis elementum ligula",
        content:
          "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar",
      },
      {
        patientName: "Rania Bumphries",
        country: "Somalia",
        date: "2019-11-22T20:45:55Z",
        headline: "bibendum morbi non quam nec dui luctus",
        content:
          "in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique",
      },
    ],
  },
  {
    name: "Dr. Scotty Baroc",
    city: "Draguignan",
    country: "France",
    qunoScoreNumber: 6.6,
    ratingsAverage: 4.2,
    treatmentsLastYear: 2656,
    yearsExperience: 9,
    basePrice: 3415.44,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Marysa Laxton",
        country: "Philippines",
        date: "2020-01-28T07:52:00Z",
        headline: "feugiat et eros vestibulum ac est",
        content:
          "odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus",
      },
      {
        patientName: "Maribel Pude",
        country: "Macedonia",
        date: "2020-05-07T11:39:13Z",
        headline: "adipiscing lorem vitae mattis nibh",
        content:
          "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula",
      },
    ],
  },
  {
    name: "Dr. Matthus Fitzjohn",
    city: "Kowang Utara",
    country: "Indonesia",
    qunoScoreNumber: 7.2,
    ratingsAverage: 4.0,
    treatmentsLastYear: 1390,
    yearsExperience: 13,
    basePrice: 3651.54,
    avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
    reviews: [
      {
        patientName: "Bear Halbord",
        country: "Chile",
        date: "2019-12-17T13:09:57Z",
        headline: "aliquet at feugiat non pretium quis",
        content:
          "vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at",
      },
      {
        patientName: "Emlynn Duell",
        country: "Poland",
        date: "2020-02-11T19:50:47Z",
        headline: "morbi odio odio elementum eu interdum eu tincidunt",
        content:
          "nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget",
      },
      {
        patientName: "Marsiella Nacey",
        country: "Ukraine",
        date: "2020-03-30T19:14:45Z",
        headline: "ridiculus mus etiam vel augue vestibulum rutrum rutrum",
        content:
          "platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at",
      },
      {
        patientName: "Corby Hulland",
        country: "France",
        date: "2019-12-23T23:35:00Z",
        headline: "vel dapibus at diam nam",
        content:
          "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id",
      },
    ],
  },
];

export default doctors;
