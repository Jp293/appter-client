curl "https://appter.herokuapp.com/guests" \
--include \
--request POST \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
