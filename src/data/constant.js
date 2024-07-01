const folders = [
    {
      name: "abc",
      id: 1,
      isFolder: true,
      childrens: [
        {
          name: "xyz",
          id: 2,
          isFolder: false,
          childrens: [],
        },
        {
          name: "xyz1",
          id: 3,
          isFolder: true,
          childrens: [
            {
              name: "wyeg",
              id: 4,
              isFolder: false,
              childrens: [],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "lkj",
      isFolder: false,
      childrens: [],
    },
  ];
  
  export default folders;
  