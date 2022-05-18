### TODO:
* figure out how I am going to manipulate properties of the svg file for each part, such as position, rotation, scale
* do I store all svgs individually in a directory, or should I have these be a single dictionary file or similar?
* once property manipulation is figured out, need to link these all to actions to manipulate the same
    * I may be able to store a copy of the svg in each part in store, then use regex to update values as they are manipulated by actions
    * will likely need a React component for each part with an onClick which should display the menu for that part. 
    * Buttons in the menu will depend on the part. So the React component will need to know what type of part it is, either by a propertie of the part in store, or some analysis of the svg file (maybe as part of name convention?)
* parts may need to understand their relationship to other parts for purposes of positioning. For example, horns or ears need to know the dimensions of the head to be placed correctly
* Is it better to have all part svgs be wrapped into a single svg file which occupies the whole space of the coloring page, or to have them be separate svg images with position controlled by their parent html elements?