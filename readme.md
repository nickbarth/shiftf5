# Shift F5

Live reload minus the hot swapping

### Setup

```bash
npm install -g shiftf5
cd /var/www/example.com && shiftf5
```

Add this to your HTML page

```html
<script src="http://localhost:8800/script.js"></script>
```

A `location.reload()` is triggered when you change files in that directory.

### License
WTFPL &copy; 2016 Nick Barth
