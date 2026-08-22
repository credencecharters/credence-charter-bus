# -*- coding: utf-8 -*-
import io, re
p='src/data/fleet.ts'
s=io.open(p,encoding='utf-8').read()
assert 'features: string[]' not in s

s = s.replace("""  capacity: string
  short: string
  description: string
  amenities: string[]""", """  capacity: string
  short: string
  description: string
  features: string[]
  amenities: string[]""", 1)

data = {
 "motor-coaches": {
  "short": "A 50 to 56 passenger charter bus built for the long haul — high-back reclining seats, deep luggage bays, and a smooth ride hour after hour.",
  "description": "A motor coach is the full-size charter bus most groups picture: 50 to 56 passengers, built for distance. Raised-deck seating gives every passenger a view and a quieter ride, the luggage bays underneath swallow suitcases and equipment for a week away, and an on-board restroom keeps stops to a minimum. When a group is crossing state lines or touring for several days, this is the charter bus rental we recommend first.",
  "features": ["Wi-Fi", "Reclining seats", "Restroom", "Climate control", "Power outlets", "Overhead monitors", "PA system", "Luggage bays"],
 },
 "coach-buses": {
  "short": "A 40 to 45 passenger charter bus — full coach comfort for mid-large groups without paying for empty seats.",
  "description": "Coach buses seat 40 to 45 passengers — the right charter bus when a full 56-seat coach would ride half empty but a mini bus can't hold everyone. You keep the comforts that matter on a longer ride, with a vehicle matched to your actual headcount.",
  "features": ["Wi-Fi", "Reclining seats", "Climate control", "Power outlets", "PA system", "Luggage bays"],
 },
 "mini-buses": {
  "short": "A 20 to 32 passenger mini bus — easier to load, easier to park, same reliable ride as a full-size charter bus.",
  "description": "Mini buses seat 20 to 32 passengers, hitting the sweet spot between a van and a full-size charter bus. They board quickly, navigate city streets and hotel entrances with ease, and still give every passenger a comfortable reclining seat — ideal for shuttles, day trips, and mid-size groups.",
  "features": ["Wi-Fi", "Reclining seats", "Climate control", "Overhead storage", "PA system", "Luggage space"],
 },
 "sprinter-vans": {
  "short": "A 10 to 14 passenger sprinter van — executive comfort, airport-friendly, and quick around town.",
  "description": "Sprinter vans carry 10 to 14 passengers in a tall, walk-in cabin with premium seating. They're the go-to for executive teams, airport transfers, and small groups that want to travel together without the footprint of a charter bus.",
  "features": ["Wi-Fi", "Executive seating", "High-roof cabin", "Climate control", "Power outlets", "Luggage space"],
 },
 "school-buses": {
  "short": "A 28 to 60 passenger school bus — the budget-friendly classic for short trips, school events, and shuttles.",
  "description": "School buses are the most economical charter bus option for moving a large group over shorter distances — 28 to 60 passengers depending on the vehicle. They're a familiar, dependable choice for field trips, church events, camp shuttles, and wedding guest transport between venues.",
  "features": ["Bench seating", "Roof hatches", "Ventilation", "Safety equipment", "Vetted drivers"],
 },
 "party-buses": {
  "short": "A 14 to 40 passenger party bus — perimeter seating, lighting, and sound for birthdays, bachelor and bachelorette parties, and nights out.",
  "description": "Party buses carry 14 to 40 passengers and turn the ride itself into part of the event. Perimeter seating keeps the group together and talking, with sound systems and accent lighting on board. A professional driver handles the road so everyone can enjoy the night safely.",
  "features": ["Wraparound seating", "Premium sound", "LED lighting", "Dance floor", "Bar area", "Chauffeur"],
 },
 "limousines": {
  "short": "A stretch limousine for up to 10 passengers — weddings, formal evenings, and arrivals that deserve an entrance.",
  "description": "Our stretch limousines seat up to 10 passengers and bring the classic touch to weddings, anniversaries, proms, and formal nights. Plush seating, privacy, and a chauffeur at the door — the details that make an occasion feel like one.",
  "features": ["Leather seating", "Privacy partition", "Beverage bar", "Ambient lighting", "Chauffeur"],
 },
 "suvs": {
  "short": "A luxury SUV for up to 7 passengers — roomy and discreet for executives, families, and airport runs with extra luggage.",
  "description": "Luxury SUVs offer room for up to seven passengers plus luggage, with the comfort and discretion executives and families expect. A strong choice for airport transfers, client pickups, and city-to-city runs.",
  "features": ["Leather seating", "Cargo space", "Climate control", "Entertainment system", "Chauffeur"],
 },
 "sedans": {
  "short": "An executive sedan for up to 4 passengers — punctual, polished, point-to-point.",
  "description": "Executive sedans are the simplest way to move up to four people in comfort. Airport pickups, business meetings, and evening events — on time, every time, with a professional behind the wheel.",
  "features": ["Leather interior", "Climate control", "Entertainment system", "Meet-and-greet", "Chauffeur"],
 },
}

SHORT = re.compile(r'    short:\n      "(?:[^"\]|\.)*",\n')
DESC = re.compile(r'    description:\n      "(?:[^"\]|\.)*",\n')

blocks = s.split('    slug: "')
out = [blocks[0]]
for block in blocks[1:]:
    slug = block.split('"', 1)[0]
    entry = data[slug]
    block, n1 = SHORT.subn(lambda m: '    short:\n      "%s",\n' % entry["short"], block, count=1)
    block, n2 = DESC.subn(lambda m: '    description:\n      "%s",\n' % entry["description"], block, count=1)
    assert n1 == 1 and n2 == 1, slug
    feats = "".join('      "%s",\n' % f for f in entry["features"])
    assert '    amenities: [' in block, slug
    block = block.replace('    amenities: [', '    features: [\n%s    ],\n    amenities: [' % feats, 1)
    out.append(block)
s = '    slug: "'.join(out)
io.open(p, 'w', encoding='utf-8', newline='\n').write(s)
print('ok')
