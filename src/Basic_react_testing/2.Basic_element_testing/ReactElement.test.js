import { render, screen } from "@testing-library/react";
import ReactElement from "./ReactElement";
//important point :-----  for the lerning purpose i am taking every testing in sperate test but in the reality you have to take in one ,else it become slow becuzz every test we are rendring component--------
//1.finding text
test("test for heading tag", () => {
  render(<ReactElement />);
  let heading = screen.getByText("Hello , I Am Heading");
  expect(heading).toBeInTheDocument();
});

//2.testing an image
test("testing for image tag", () => {
  render(<ReactElement />);
  let image = screen.getByTitle("img-testing");
  expect(image).toBeInTheDocument();
  //you can check by attribute also
  expect(image).toHaveAttribute("alt", "img-testing");
});

//3.testing for anchor
test("testing for anchor tag", () => {
  render(<ReactElement />);
  //select by getByText
  let anchore = screen.getByText("click here for more information");
  //select by getByRole
  let anchore2 = screen.getByRole("link");
  //1.assertion
  expect(anchore).toBeInTheDocument();
  //2.assertion
  expect(anchore2).toHaveAttribute("href", "https://google.com");
});
//4.testing for table

test("testing for table", () => {
  render(<ReactElement />);
  //this is table
  let table = screen.getByRole("table");
  //i want to check tr
  //let tr = screen.getByRole("row"); //in this case you are getting error because multiple tr is available inside the table so you have to select all tr  for that one
  let tr = screen.getAllByRole("row");
  //assertion for table
  expect(table).toBeInTheDocument();
  //assertion for tr
  expect(tr.length).toBe(2);
});

//5.testing for list
test("testing for list", () => {
  render(<ReactElement />);
  //testing for list
  let list = screen.getByRole("list");
  //testing for list item for the instance just suppose we dont have any id , name ,role that time you can come with  test id concept (for more details follow document 1.note.txt)
  let listItem = screen.getAllByTestId("utsav");
  //assertion -1
  expect(list).toBeInTheDocument();
  //assertion -2
  expect(listItem.length).toBe(3);
});
