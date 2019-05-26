# High Temperature 3D Printing (with nanotubes!)

This project was a part of an internship at NASA Langley which spanned over two consecutive summers, within the Carbon Nanotube Incubator group. We developed two main technologies during that time:
1. A low-cost high temperature 3D printing platform using (modified) open-source components from the LulzBot series of printers.
   - Using the base model, precariously printed polycarbonate pieces to get slightly more stability with printing at high temperatures.
   - By upgrading with the polycarbonate parts, we were able to reach temperatures of 450C when printing, allowing us to print Ultem plastic. We then printed the components for the printer in ultem, and upgraded it a final time.
   - Using this platform as the test bed, we developed a 'yarn laying' technique with a fiber spun from long strands of carbon nanotubes. A novel 'stitching' technique with an extruder was used to lay the yarn.
   - This was a great exercise in modifying an open source codebase, and designing new heat resilient components for the printer.
   [Here is a whitepaper documenting this work!](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20170000214.pdf)

2. A large-format 3D printer with two gantries and six unique toolheads.
   - The scale up of this technology involved putting 4 thermoplastic extruders and 1 yarn laying extruder on a large gantry. The second gantry consisted of a pick-and-place arm, a paste extruder, and an ultrasonic horn.
   - The purpose of the instrument was to manufacture embedded electronics in place using nanotube yarn as a conductive trace as well as using the yarn as structural reinforcement.
   - Wired the instrument, and created the required driver board. Worth noting here that I've gotten over the hill of making the dreaded 2.54 mm != 0.1 in error when I got the circuit board made, so I'll never make that mistake again!
   - I also designed the pick and place head, operated by a venturi pump, and set up the pneumatics for the instrument. This was to control simple motion components of the instrument and to reduce the need for motors (due to how hot the printer would get, any motors needed to be actively cooled or placed outside of the instrument, so it sucked to add motors).

Here's a picture of me and my team:
![alt text](../assets/img/nasa-folks.jpg "The Good People of NASA Langley")
