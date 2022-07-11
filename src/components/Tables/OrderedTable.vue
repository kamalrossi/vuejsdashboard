<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Posts">{{ item.posts }}</md-table-cell>
        <md-table-cell md-label="Designation">{{ item.designation }}</md-table-cell>
        <md-table-cell md-label="Contact">{{ item.contact }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          id: 1,
          name: "Veronika Ralph",
          posts: "34",
          designation: "Senior reporter",
          contact: "+428912965",
        },
        {
          id: 2,
          name: "Christina Martinez",
          posts: "42",
          designation: "Reporter",
          contact: "+42323934543",
        },
        {
          id: 3,
          name: "Hery Chiz",
          posts: "23",
          designation: "Senior reporter",
          contact: "+4232393445",
        },
        {
          id: 4,
          name: "Megh Hasier",
          posts: "34",
          designation: "Senior reporter",
          contact: "+42323934323",
        },
        

      ],
    };
  },
};
</script>
