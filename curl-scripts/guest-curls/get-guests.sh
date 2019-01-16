curl "https://appter.herokuapp.com/guests" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo

# might need /${ID} after listings on line 1.
