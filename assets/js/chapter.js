fetch("assets/StoryDetail.json").then(e => e.json()).then(e => {
 let t = new URLSearchParams(window.location.search),
 n = t.get("id"),
 l = e.filter(e => e.ChapterId === n);
 l.forEach(e => {
  let t = document.getElementById("thumbs"),
  d = document.createElement("div");
  d.className = "thumbnail";
  let f = document.createElement("div"),
  u = document.createElement("p"),
  n = document.createElement("div");
  f.className = "thumbnail-title",
  u.className = "thumbnail-desc",
  n.className = "thumbnail-choices",
  f.textContent = `${null!=e.SubName?e.SubName+" -":""} ${e.Name}`,
  u.textContent = e.Desc;
  if (null != e["StoryId[0]"]) {
   let a = document.createElement("a");
   var i = "assets/movies/Movie" + e["StoryId[0]"] + ".json";
   a.href = `story.html?file=${encodeURIComponent(i)}`,
   a.textContent = "Begining",
   a.className = "file-link1",
   n.appendChild(a)
  }
  if (null != e["StoryId[1]"]) {
   let o = document.createElement("a");
   var r = "assets/movies/Movie" + e["StoryId[1]"] + ".json";
   o.href = `story.html?file=${encodeURIComponent(r)}`,
   o.textContent = "Ending",
   o.className = "file-link2",
   n.appendChild(o)
  }
  d.appendChild(f),
  d.appendChild(u),
  d.appendChild(n),
  t.appendChild(d);
 })
});
function H() {
 window.location.href = "index.html"
}