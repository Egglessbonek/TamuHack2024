#!/bin/bash

directory_path="."  # Replace with your actual directory path

# Check if the directory exists
if [ -d "$directory_path" ]; then
  # List all files in the directory and format as JSON
  files_json=$(find "$directory_path" -type f -exec printf '  "%s"\n' {} \; | sed '$!s/$/,/' | awk '{print "["$0"]"}')

  # Print the JSON output
  echo "$files_json"
else
  echo "Directory does not exist: $directory_path"
fi
