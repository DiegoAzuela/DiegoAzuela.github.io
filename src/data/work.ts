export interface Pillar {
  id: string;
  title: string;
  lede: string;
  threads: { org: string; period: string; body: string }[];
}

export const pillars: Pillar[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    lede: 'Robotics and instrumentation for biofabrication and cell biology — the work that put my name on two peer-reviewed papers.',
    threads: [
      {
        org: 'Harvard Medical School · Brigham and Women’s Hospital',
        period: 'Jul 2021 — Feb 2022',
        body: 'Wrote the Python control software for a 6-DOF robotic bioprinter — OpenCV depth sensing, computational-geometry path planning, end-to-end validation of deposition accuracy. Published in Advanced Materials Technologies (2024).',
      },
      {
        org: 'Harvard Medical School · Brigham and Women’s Hospital',
        period: 'Jul 2021 — Feb 2022',
        body: 'Built the data-acquisition and signal-processing pipeline for an electrochemical biosensor inside a microfluidic bioreactor, giving researchers a continuous readout of stem-cell osteogenesis. Published in ACS Sensors (2024).',
      },
    ],
  },
  {
    id: 'space',
    title: 'Space',
    lede: 'Flight-experiment hardware and the electronics behind it — from a year-long ISS food-preservation study to an exoskeleton control loop.',
    threads: [
      {
        org: 'Space Makers · Tecnológico de Monterrey',
        period: 'Mar 2019 — Dec 2020',
        body: 'SPES: synthesis of bio-nano polymers for enhanced surface-barrier properties in space. Designed the electronic and control system for a 12-month aerospace experiment testing a food-preservation solution. Presented at CONACES, the first National Congress of Space Activities, organized by the Mexican Aerospace Agency.',
      },
      {
        org: 'United Nations / Airbus — ISS Bartolomeo platform',
        period: '2020',
        body: 'Pre-selected as one of three projects in the first cycle of “Access to Space with the ISS Bartolomeo Platform.”',
      },
      {
        org: 'INDI',
        period: 'Aug — Dec 2019',
        body: 'Alice exoskeleton: PID control in Arduino C++, structural parts in PLA and carbon-fiber-reinforced nylon.',
      },
    ],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    lede: 'Where most of my career sits: production Go and Python test systems for high-voltage energy storage, humanoid robotics, and vehicles at Tesla.',
    threads: [
      {
        org: 'Tesla · Energy — Software Development',
        period: 'Mar 2023 — Present',
        body: 'Primary author of the shared Go instrument-driver and hardware-abstraction libraries (375+ commits, 9 vendors) that test systems in Fremont, Lathrop and Shanghai depend on. Top contributor on the Megapack thermal tester (projected USD 104M/year savings) and co-maintainer of a safety-controller FVT implementing the full ISO 14229 flashing sequence.',
      },
      {
        org: 'Tesla · Optimus',
        period: '2024',
        body: 'Drove Optimus Charger EOL first-pass yield from 0% to 80% during NPI — ECU firmware debugging via CANape, DBC decoding, HEX analysis; AWS S3 as a centralized CAN-log trace store.',
      },
      {
        org: 'Carrier Global · Frigus Bohn · Owens-Illinois',
        period: '2019 — 2022',
        body: 'QA digitization with Power BI and NLP failure forecasting; a warehouse-management system that lifted efficiency 34%; logistics tooling.',
      },
    ],
  },
];
