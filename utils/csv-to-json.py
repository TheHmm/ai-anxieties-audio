import csv, json, sys

csv_file = sys.argv[1]
json_file = sys.argv[2]

if not csv_file or not json_file:
  print( 'Please provide a path for a CSV file to parse from as a first argument and a JSON file to dunp to as a second argument.' )

else:

  # create a dictionary
  data = {}

  # Open a csv reader called DictReader
  with open(csv_file, encoding='utf-8') as csvf:
    csvReader = csv.DictReader(csvf)

    # Convert each row into a dictionary
    # and add it to data
    for rows in csvReader:

      # Assuming a column named 'No' to
      # be the primary key
      key = rows['index']
      data[key] = rows

  # Open a json writer, and use the json.dumps()
  # function to dump data
  with open(json_file, 'w', encoding='utf-8') as jsonf:
    jsonf.write(json.dumps(data, indent=4))


  # f = open( json_file, 'w' )
  # f.write( json.dumps([ dict(r) for r in csv.DictReader( csv_file )]))
  # f.close()
