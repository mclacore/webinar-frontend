#!/bin/sh
# entrypoint.sh

# Replace '%%BACKEND_ENDPOINT%%' in script.js with the environment variable
sed -i "s|%%BACKEND_ENDPOINT%%|${BACKEND_ENDPOINT}|g" /app/script.js

# Now, run the main container command
exec "$@"
